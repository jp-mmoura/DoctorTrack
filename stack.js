import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import MapScreen from '../MapScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="map" component={MapScreen} options={{ title: 'Map' }} initialParams={{ selectedActivity: null }} />
    </Stack.Navigator>
  );
};

export default AppStack;
