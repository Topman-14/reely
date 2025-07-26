import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { Search } from 'lucide-react-native';

const Searchbar = ({ onPress, placeholder }: { onPress: () => void; placeholder: string }) => {
  return (
    <View className='flex-row items-center rounded-full px-5 py-4 w-full '>
      <Search />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={() => {}}
        className='flex-1 ml-2'
      />
    </View>
  );
};

export default Searchbar;
