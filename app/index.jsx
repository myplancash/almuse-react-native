import 'react-native-gesture-handler';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {images} from '../constants';
import { Link } from 'expo-router';

export default function App() {
  return ( 
  <SafeAreaView className="bg-primary h-full">
       <ScrollView
       //so the whoile creen is scrollable the hjeight might be larger, to be able to scroll up and down
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[150px] h-[10 4px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />
          <View classNam e="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Almuse</Text>
            </Text>
            <Link href='/home' style={{color: 'white'}}>Go to home</Link>

            <Image
              source={images.path} 
              className="w-[336px] h-[15px] absolute -bottom-0 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Almuse
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}