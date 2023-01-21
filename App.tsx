import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import EmojiPicker from './components/EmojiPicker/EmojiPicker';
import DatePicker from './components/DatePicker/DatePicker';
import OpenAiCallButton from './components/OpenAiCallButon/OpenAiCallButton';

const PlaceholderImage = require('./assets/images/someImage.jpg');

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showAppOptions, setShowAppOptions] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    console.log('this is the selected image', selectedImage)
  }, [selectedImage])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })
    console.log('hi')
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true)
    } else {
      alert('You did not select any image.');
    }
  }

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    setIsModalVisible(false);
  }

  const onModalClose = () => {
    setIsModalVisible(true);
  }

  const img = selectedImage !== null
    ? { uri: selectedImage }
    : PlaceholderImage;
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="auto" />
      <View >
        {/* @ts-ignore */}
        <Image source={img} className="w-[320px] h-[440px] rounded-xl" />
      </View>

    <View>
      <OpenAiCallButton />
    </View>

      <View>
        {/* <DatePicker onDateSelected={(e) => {console.log('here is the selected date: ',e )}}/> */}
      </View>
      {
        !showAppOptions &&
        <View className=' mt-4'>
          <Pressable className='border border-orange-400 mt-4 flex flex-row items-center justify-around px-2' onPress={pickImage}>
            <Entypo name='folder-images' color={'orange'} size={20} />
            <Text className='px-8 py-4'>
              Choose an image
            </Text>
          </Pressable>
          <Pressable className='border border-orange-400 mt-4' onPress={() => { setShowAppOptions(true) }}>

            <Text className='px-8 py-4'>
              use this image
            </Text>
          </Pressable>
        </View>
      }
      {
        showAppOptions && <View className='w-[80%] mt-4 flex flex-row p-4 justify-between border border-orange-500'>
          <Pressable className='flex items-center justify-center' onPress={() => {onReset()}}>
          <Ionicons name="reload" size={20}  />
            <Text>
              reset
            </Text>
          </Pressable>
          <Pressable className='border rounded-full' onPress={onAddSticker}>
            <MaterialIcons name="add" size={38} color="#25292e" />
          </Pressable>
          <Pressable className='flex items-center justify-center' onPress={() => {onSaveImageAsync()}}>
              <AntDesign name='download' size={20} />
              <Text>save</Text>
          </Pressable>
        </View>
      }
       {/* <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <Text>hi</Text>
       </EmojiPicker> */}
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
