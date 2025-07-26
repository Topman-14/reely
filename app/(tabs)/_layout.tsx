import { Tabs } from 'expo-router';
import { Heart, Home, Search, User } from 'lucide-react-native';
import React from 'react';

const tabs = [
  {
    name: 'index',
    title: 'Home',
    icon: Home,
  },
  {
    name: 'search',
    title: 'Search',
    icon: Search,
  },
  {
    name: 'saved',
    title: 'Saved',
    icon: Heart,
  },
  {
    name: 'profile',
    title: 'Profile',
    icon: User,
  },
];

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShadowVisible: false,
        tabBarStyle: {
          shadowOpacity: 0,
          elevation: 0.5,
          height: 60,
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          boxShadow: 'none',
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          paddingTop: 6,
        }
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            headerShown: false,
            title: tab.title,
            tabBarIcon: ({ color, size }) => {
              const IconComponent = tab.icon;
              return <IconComponent size={size} color={color} />;
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default _layout;




// import { BlurView } from 'expo-blur';
// import { Tabs } from 'expo-router';
// import { Heart, Home, Search, User } from 'lucide-react-native';
// import React from 'react';
// import { Platform, StyleSheet } from 'react-native';

// const tabs = [
//   {
//     name: 'index',
//     title: 'Home',
//     icon: Home,
//   },
//   {
//     name: 'search',
//     title: 'Search',
//     icon: Search,
//   },
//   {
//     name: 'saved',
//     title: 'Saved',
//     icon: Heart,
//   },
//   {
//     name: 'profile',
//     title: 'Profile',
//     icon: User,
//   },
// ];

// const _layout = () => {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: 'rgba(0, 0, 0, 0.8)',
//         tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.4)',
//         headerShadowVisible: false,
//         tabBarStyle: {
//           position: 'absolute',
//           bottom: 32,
//           left: 20,
//           right: 20,
//           height: 60,
//           borderRadius: 25,
//           backgroundColor: Platform.OS === 'ios' 
//             ? 'rgba(255, 255, 255, 0.15)' 
//             : 'rgba(255, 255, 255, 0.85)',
//           borderWidth: Platform.OS === 'ios' ? 1 : 0.5,
//           borderColor: Platform.OS === 'ios' 
//             ? 'rgba(255, 255, 255, 0.3)' 
//             : 'rgba(255, 255, 255, 0.6)',
//           elevation: 0,
//           // Cross-platform shadow for depth
//           shadowColor: '#000',
//           shadowOffset: {
//             width: 0,
//             height: 10,
//           },
//           shadowRadius: 25,
//           shadowOpacity: Platform.OS === 'ios' ? 0.1 : 0.15,
//           // Additional glass effect properties
//           overflow: 'hidden',
//         },
//         tabBarBackground: () => (
//           Platform.OS === 'ios' ? (
//             <BlurView
//               intensity={100}
//               tint="extraLight"
//               style={[
//                 StyleSheet.absoluteFill,
//                 {
//                   borderRadius: 25,
//                   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                 }
//               ]}
//             />
//           ) : null
//         ),
//         tabBarItemStyle: {
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '100%',
//           width: '100%',
//           paddingTop: 6,
//           borderRadius: 20,
//         }
//       }}
//     >
//       {tabs.map((tab) => (
//         <Tabs.Screen
//           key={tab.name}
//           name={tab.name}
//           options={{
//             headerShown: false,
//             title: tab.title,
//             tabBarIcon: ({ color, size }) => {
//               const IconComponent = tab.icon;
//               return <IconComponent size={size} color={color} />;
//             },
//           }}
//         />
//       ))}
//     </Tabs>
//   );
// };

// export default _layout;
