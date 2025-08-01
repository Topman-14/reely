import React, { useState, useEffect, useRef } from "react";
import { View, Text, ActivityIndicator, FlatList, Image, TextInput } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import logo from '@/assets/images/icon.png';
import { fetchMovies } from "@/services/api";
import SearchBar from "@/components/searchbar";
import MovieDisplayCard from "@/components/moviecard";
import useFetch from "@/services/use-fetch";
import { Movie } from "@/types/tmdb";
import bg from '@/assets/images/bg.png';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<TextInput>(null);

  const {
    data: movies = [],
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  useFocusEffect(
    React.useCallback(() => {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }, [])
  );

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();

        // Call updateSearchCount only if there are results
        // if (movies?.length! > 0 && movies?.[0]) {
        //   await updateSearchCount(searchQuery, movies[0]);
        // }
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="flex-1">
      <Image source={bg} className='absolute w-full z-0' />

      <View className="px-5 pt-20 pb-5">
        <View className="w-full flex-row justify-center items-center">
          <Image source={logo} className='size-16 mb-3 mx-auto' />
        </View>

        <View className="mt-5">
          <SearchBar
            ref={searchInputRef}
            placeholder="Search for a movie"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        {loading && (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="my-3"
          />
        )}

        {error && (
          <Text className="text-red-500 my-3">
            Error: {error.message}
          </Text>
        )}

        {!loading &&
          !error &&
          searchQuery.trim() &&
          movies?.length! > 0 && (
            <Text className="text-xl font-bold ">
              Search Results for{" "}
              <Text className="text-accent">{searchQuery}</Text>
            </Text>
          )}
      </View>

      <FlatList
        className="px-5"
        data={movies as Movie[]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieDisplayCard {...item} />}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'flex-start',
          gap: 12,
          paddingLeft: 5,
          marginBottom: 14,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={
          !loading && !error ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-gray-500">
                {searchQuery.trim()
                  ? "No movies found"
                  : "Start typing to search for movies"}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;