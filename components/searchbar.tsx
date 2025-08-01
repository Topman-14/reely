import { View, Text, TextInput, Pressable } from 'react-native';
import React, { forwardRef } from 'react';
import { Search } from 'lucide-react-native';

const Searchbar = forwardRef<TextInput, { 
  onPress?: () => void; 
  placeholder: string, 
  value?: string, 
  onChangeText?: (text: string) => void,
  autoFocus?: boolean,
  showKeyboard?: boolean
}>(({ onPress, placeholder, value, onChangeText, autoFocus = false, showKeyboard = true }, ref) => {
  const handlePress = () => {
    if (onPress && !showKeyboard) {
      onPress();
    }
  };

  return (
    <Pressable onPress={handlePress} disabled={showKeyboard}>
      <View className='flex-row border border-gray-400 items-center rounded-[999px] px-5 py-3 w-full mb-5'>
        <Search />
        <TextInput
          ref={ref}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          autoFocus={autoFocus}
          editable={showKeyboard}
          className='flex-1 ml-2'
        />
      </View>
    </Pressable>
  );
});

Searchbar.displayName = 'Searchbar';

export default Searchbar;
