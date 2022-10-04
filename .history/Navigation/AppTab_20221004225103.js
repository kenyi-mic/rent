import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon } from 'react-native-heroicons/solid';
import HomeScreen from '../screens/HomeScreen';

const AppTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tap.Navigator>
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color="gray", size=30 }) => (
           <HomeIcon color={color} size={size}
          
   ) }}
      />
    </Tap.Navigator>
  )
}

export default AppTab