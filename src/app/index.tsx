
{/* <ScrollView> = in React Native we need this to make a page scrollable  */}
 {/* <View> = <div> and <Text> = text elements like h1, p...etc */}
import { ScrollView, Text, View } from 'react-native';

// First parent element => Respects phone safe areas = the screen boundary => so that elements don't overlap each other
import { SafeAreaView } from 'react-native-safe-area-context';


import TheHeader from "../components/TheHeader";

export default function HomeScreen() {
  return (

//flex-1 = this parent container will tale all available screen space
<SafeAreaView className='flex-1'> 

{/* flex-1 = Take all available space in the parent container*/}
  <ScrollView showsVerticalScrollIndicator={false} className='flex-1'>

    <View>
      <TheHeader/>
    </View>

    {/* Main Heading */}
    <View className='mx-5 mt-10 mb-24 items-center'>
      <Text className='text-center text-[30px] text-[#dd2630]'>
         Vente d'oeuvres d'art
      </Text>
    </View>

    {/* Monthly selection */}
    <View className='mb-4 items-center'>
      <Text className='mb-3 text-center text-[27px] font-bold text-[#D75B26]'>
        Sélection du Mois
      </Text>

      <Text className='mx-3 text-center text-xl text-gray-800'>
        <Text className='font-bold'>Cliquez</Text> sur une oeuvre pour plus d'informations
      </Text>

        {/* Artwork carousel */}
        <View className="mt-10 mx-5 h-64 items-center justify-center rounded-2xl bg-gray-100">
          <Text className="text-gray-500">
            Artwork carousel coming soon
          </Text>
        </View>
    </View>

    {/* New Articles */}
    <View>
      <Text className='mb-3 text-center text-[27px] font-bold text-[#D75B26]'>
        Les 20 Nouvelles oeuvres
      </Text>
      <Text className='mx-3 text-center text-xl text-gray-800'>
        Utilisez le filtre pour découvrir les oeuvres adaptées à votre budget
      </Text>
    </View>  

  </ScrollView>
</SafeAreaView>
  );
}
