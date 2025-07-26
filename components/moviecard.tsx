import { TouchableOpacity, Image } from 'react-native';
import { Movie } from '@/types';
import { Link } from 'expo-router';
import { Text } from 'react-native';
const MovieCard = ({ id, poster_path, title, vote_average }: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className='w-[30%]'>
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://placehold.co/600x400/1a1a1a/fff.png',
          }}
          className='w-full h-52 rounded-lg'
          resizeMode='cover'
        />
        <Text className='-semibold mt-2'>{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
