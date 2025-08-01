import { TouchableOpacity, Image, View, Text } from 'react-native';
import { Movie } from '@/types';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
  const year = release_date ? new Date(release_date).getFullYear() : '';
  const rating = Math.round(vote_average / 2);
  const stars = '⭐'.repeat(rating);
  
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className='w-[30.5%]'>
        <View className='relative'>
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'https://placehold.co/600x400/1a1a1a/fff.png',
            }}
            className='w-full h-52 rounded-lg'
            resizeMode='cover'
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.8)']}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60%',
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
          />
          <View className='absolute bottom-2 left-2 right-2'>
            <Text numberOfLines={1} className='text-white font-semibold text-sm mb-1'>
              {title}
            </Text>
            <View className='flex-row items-center justify-between'>
              <Text className='text-white text-xs'>{year}</Text>
              <Text className='text-white text-xs'>{stars}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
