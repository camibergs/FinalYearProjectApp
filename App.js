import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import NavigationBottom from "./src/components/navigation/NavigationBottom";
import SendRequestScreen from "./src/components/screens/SendRequestScreen";
import TrackJourneyScreen from "./src/components/screens/TrackJourneyScreen";
import SplashScreen from "./src/components/mainscreens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={NavigationBottom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SendRequestScreen"
          component={SendRequestScreen}
          options={{ title: "Send Request" }}
        />
        <Stack.Screen
          name="JourneyScreen"
          component={NavigationBottom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrackJourneyScreen"
          component={TrackJourneyScreen}
          options={{ title: "Journey" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
