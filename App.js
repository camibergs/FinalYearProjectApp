import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import NavigationBottom from "./src/components/navigation/NavigationBottom";
import TrackJourneyScreen from "./src/components/screens/TrackJourneyScreen";
import ScheduleJourneyScreen from "./src/components/screens/ScheduleJourneyScreen";
import DepartureAssistanceScreen from "./src/components/screens/DepartureAssistanceScreen";
import SplashScreen from "./src/components/mainscreens/SplashScreen";
import SendFormRequest1 from "./src/components/screens/SendFormRequest1";
import SendFormRequest2 from "./src/components/screens/SendFormRequest2";
import SendFormRequest3 from "./src/components/screens/SendFormRequest3";
import ViewRequestScreen from "./src/components/screens/ViewRequestScreen";
import { FlightProvider } from "./src/context/FlightContext";
import ConfirmationRequest from "./src/components/screens/ConfirmationRequest";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FlightProvider>
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
            options={{
              title: "Step 1/3",
              headerStyle: {
                backgroundColor: "#56A0BB",
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="SendFormRequest2"
            component={SendFormRequest2}
            options={{
              title: "Step 2/3",
              headerStyle: {
                backgroundColor: "#56A0BB",
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="SendFormRequest3"
            component={SendFormRequest3}
            options={{
              title: "Step 3/3 - Confirmation",
              headerStyle: {
                backgroundColor: "#56A0BB",
              },
              headerTintColor: "#fff",
            }}
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
            options={{
              title: "Your Journey Schedule",
              headerStyle: {
                backgroundColor: "#56A0BB",
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="DepartureAssistanceScreen"
            component={DepartureAssistanceScreen}
            options={{
              title: "Departure Assistance",
              headerStyle: {
                backgroundColor: "#56A0BB",
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="ViewRequestScreen"
            component={ViewRequestScreen}
            options={{ title: "View request" }}
          />
          <Stack.Screen
            name="ConfirmationRequest"
            component={ConfirmationRequest}
            options={{
              title: "Confirmation request",
              headerStyle: {
                backgroundColor: "#56A0BB",
              },
              headerTintColor: "#fff",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FlightProvider>
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
