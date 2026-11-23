
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-3xl font-bold text-white">
        PhenixDeals
      </Text>

      <Text className="mt-3 text-lg text-white">
        NativeWind is working!
      </Text>
    </View>
  );
}
