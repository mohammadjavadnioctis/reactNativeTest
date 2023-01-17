import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';


const PlaceholderImage = require('./assets/images/someImage.jpg');

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="auto" />
      <View >
        <Image source={PlaceholderImage} className="w-[320px] h-[440px] rounded-xl"/>
      </View>
      <View className=' mt-4'>
          <Pressable className='border border-orange-400 mt-4 flex flex-row items-center justify-around px-2' onPress={() => {alert("you pressed the button")}}>
                <Entypo name='folder-images' color={'orange'} size={20} />
              <Text className='px-8 py-4'> 
                Choose an image
              </Text>
          </Pressable>
          <Pressable className='border border-orange-400 mt-4' onPress={() => {alert("you pressed the button")}}>
                
              <Text className='px-8 py-4'> 
                 use this image
              </Text>
          </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
