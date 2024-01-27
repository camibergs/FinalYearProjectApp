import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import JourneyScreen from "../screens/JourneyScreen";
import CallSupportScreen from "../screens/CallSupportScreen";
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const NavigationBottom = () => {


  return(
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          backgroundColor: '#ffffff',
          borderRadius: 10,
          height: 90
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Journey" component={JourneyScreen}/>
      <Tab.Screen name="Call Support" component={CallSupportScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>

    </Tab.Navigator>

  );
}

export default NavigationBottom; 