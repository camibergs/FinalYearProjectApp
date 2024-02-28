import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import NavigationBottom from "./src/components/navigation/NavigationBottom";
import TrackJourneyScreen from "./src/components/screens/TrackJourneyScreen";
import ScheduleJourneyScreen from "./src/components/screens/ScheduleJourneyScreen";
import SplashScreen from "./src/components/mainscreens/SplashScreen";
import SendFormRequest1 from "./src/components/screens/SendFormRequest1";
import SendFormRequest2 from "./src/components/screens/SendFormRequest2";
import SendFormRequest3 from "./src/components/screens/SendFormRequest3";

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
          name="SendFormRequest1"
          component={SendFormRequest1}
          options={{ title: "Step 1" }}
        />
        <Stack.Screen
          name="SendFormRequest2"
          component={SendFormRequest2}
          options={{ title: "Step 2" }}
        />
        <Stack.Screen
          name="SendFormRequest3"
          component={SendFormRequest3}
          options={{ title: "Confirmation" }}
        />

        <Stack.Screen
          name="JourneyScreen"
          component={NavigationBottom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrackJourneyScreen"
          component={TrackJourneyScreen}
          options={{ title: "Track Journey" }}
        />
        <Stack.Screen
          name="ScheduleJourneyScreen"
          component={ScheduleJourneyScreen}
          options={{ title: " " }}
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
