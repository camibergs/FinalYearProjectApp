import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import JourneyScreen from "../screens/JourneyScreen";
import CallSupportScreen from "../screens/CallSupportScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Icons from "../UI/Icons";

const Tab = createBottomTabNavigator();

const CustomTabLabel = ({ label, focused }) => (
  <View style={{ alignItems: "center", justifyContent: "center", top: 10 }}>
    <Text style={{ color: focused ? "blue" : "grey" }}>{label}</Text>
  </View>
);

const NavigationBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          backgroundColor: "#ffffff",
          borderRadius: 10,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Icons.Home color={focused ? "blue" : "grey"} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <CustomTabLabel label="Home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Journey"
        component={JourneyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Icons.Plane color={focused ? "blue" : "grey"} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <CustomTabLabel label="Journey" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Call Support"
        component={CallSupportScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Icons.CallSupport color={focused ? "blue" : "grey"} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <CustomTabLabel label="Call Support" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Icons.Account color={focused ? "blue" : "grey"} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <CustomTabLabel label="Account" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationBottom;
