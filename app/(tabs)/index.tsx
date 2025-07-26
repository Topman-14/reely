import bg from '@/assets/images/bg.png';
import logo from '@/assets/images/icon.png';
import MovieCard from '@/components/moviecard';
import Searchbar from '@/components/searchbar';
import { fetchMovies } from '@/services/api';
import useFetch from '@/services/use-fetch';
import { useRouter } from 'expo-router';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';

export default function Index() {
  const router = useRouter();
  const movieQuery = useFetch(() => fetchMovies({ query: '' }));
  return (
    <View className='flex-1 '>
      <Image source={bg} className='absolute w-full z-0' />
      <ScrollView
        className='flex-1 px-5'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10, minHeight: '100%' }}
      >
        <Image source={logo} className='size-16 mt-20 mb-3 mx-auto' />

        {movieQuery.loading ? (
          <ActivityIndicator
            size='large'
            color={'#00f'}
            className='mt-10 self-center'
          />
        ) : movieQuery.error ? (
          <Text>Error: {movieQuery.error.message}</Text>
        ) : (
          <View className='flex-1 mt-5'>
            <Searchbar
              onPress={() => router.push('/search')}
              placeholder='Search for a movie'
            />
            <>
              <Text className='text-lg font-semibold mb-2'>Latest Movies</Text>
              <FlatList
                data={movieQuery.data}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: 'flex-start',
                  gap: 16,
                  paddingLeft: 3,
                  marginBottom: 10,
                }}
                renderItem={({ item }) => <MovieCard {...item} />}
                className='mt-2 pb-32'
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
