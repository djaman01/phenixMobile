
import { useState } from 'react';

import {
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {
  GraduationCap,
  House,
  Image,
  Info,
  Menu,
  Phone,
  ThumbsUp,
  X,
} from 'lucide-react-native';

import { router } from 'expo-router';

const Sidebar = () => {

  const [toggled, setToggled] = useState(false);

  const closeSidebar = () => {
    setToggled(false);
  };

  const navigateTo = (path) => {
    closeSidebar();
    router.push(path);
  };

  const menuItems = [
    { title: 'Accueil', icon: House, path: '/' },
    { title: 'Oeuvres', icon: Image, path: '/oeuvres' },
    { title: 'Artistes', icon: GraduationCap, path: '/allArtists' },
    { title: 'Best Deals', icon: ThumbsUp, path: '/bestDeals' },
    { title: 'Concept', icon: Info, path: '/concept' },
    { title: 'Contact', icon: Phone, path: '/contact' },
  ];

  return (
    <>
      {/* Hamburger / Close button */}
      <Pressable
        onPress={() => setToggled(!toggled)}
        className="p-2"
      >
        {toggled ? (
          <X size={28} color="#222222" />
        ) : (
          <Menu size={28} color="#222222" />
        )}
      </Pressable>

      {/* Sidebar */}
      <Modal
        visible={toggled}
        transparent={true}
        animationType="fade"
        onRequestClose={closeSidebar}
      >
        <View className="flex-1 flex-row">

          {/* Sidebar content */}
          <View className="h-full w-[70%] bg-[#ededed] pt-16">

            {/* Close button */}
            <View className="mb-8 flex-row justify-end px-5">
              <Pressable onPress={closeSidebar}>
                <X size={28} color="#222222" />
              </Pressable>
            </View>

            {/* Navigation items */}
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Pressable
                  key={item.title}
                  onPress={() => navigateTo(item.path)}
                  className="flex-row items-center px-6 py-4"
                >
                  <Icon
                    size={23}
                    color="#333333"
                    strokeWidth={1.8}
                  />

                  <Text className="ml-5 text-lg text-gray-800">
                    {item.title}
                  </Text>
                </Pressable>
              );
            })}

          </View>

          {/* Backdrop */}
          <TouchableWithoutFeedback onPress={closeSidebar}>
            <View className="flex-1 bg-black/40" />
          </TouchableWithoutFeedback>

        </View>
      </Modal>
    </>
  );
};

export default Sidebar;
