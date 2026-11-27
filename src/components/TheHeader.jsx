import { Image, View } from 'react-native';

import { logoPhenix } from '../../assets/images';
import Sidebar from './Sidebar';

const TheHeader = () => {
  return (
    <View className="flex-row items-center justify-between px-5 mt-2 mb-5">
      <Image
        source={logoPhenix}
        className="h-24 w-40"
        resizeMode="contain"
      />

      <Sidebar />
    </View>
  );
};

export default TheHeader;