import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../mainscreens/HomeScreen";
import JourneyScreen from "../mainscreens/JourneyScreen";
import CallSupportScreen from "../mainscreens/CallSupportScreen";
import ProfileScreen from "../mainscreens/ProfileScreen";
import Icons from "../UI/Icons";

const Tab = createBottomTabNavigator();

const CustomTabLabel = ({ label, focused }) => (
  <View style={{ alignItems: "center", justifyContent: "center", top: 10 }}>
    <Text style={{ color: focused ? "#24325B" : "#BCBCBC" }}>{label}</Text>
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
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Icons.Home color={focused ? "#24325B" : "#BCBCBC"} />
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
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Icons.Plane color={focused ? "#24325B" : "#BCBCBC"} />
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
              <Icons.CallSupport color={focused ? "#24325B" : "#BCBCBC"} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <CustomTabLabel label="Call Support" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
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
              <Icons.Account color={focused ? "#24325B" : "#BCBCBC"} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <CustomTabLabel label="Profile" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationBottom;
