import bg from '@/assets/images/bg.png';
import { Image, View } from 'react-native';

export default function Index() {
  return (
    <View className='flex-1 bg-primary'>
   <Image source={bg} className='absolute' />
    </View>
  );
}
