import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MapScreen from '../MapScreen';
import Home from '../pages/home';
import Faces from '../pages/faces'; 

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="home" />;
            }
            return <Ionicons size={size} color={color} name="home-outline" />;
          },
        }}
      />
      <Tab.Screen
        name="faces"
        component={Faces} 
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="happy" />;
            }
            return <Ionicons size={size} color={color} name="happy-outline" />;
          },
        }}
      />
      <Tab.Screen
        name="map"
        component={MapScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="map" />;
            }
            return <Ionicons size={size} color={color} name="map-outline" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
