import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import initialFlights from "../../data/flights.js";
import ScreenView from "../layout/ScreenView";

const DepartureAssistanceScreen = ({ navigation }) => {
  // Initialisations --------------------------
  // State ------------------------------------
  const [flights, setFlights] = useState(initialFlights);
  // Handlers ---------------------------------
  const handleSelect = () => alert("Item Selected");

  // View -------------------------------------
  return (
    <ScreenView>
      <ScrollView style={styles.container}>
        {flights.map((flight) => {
          return (
            <Pressable key={flight.FlightID} onPress={handleSelect}>
              <View style={styles.item}>
                <Text style={styles.text}>Departure Assistance</Text>
                <Text style={styles.text}>Status: Confirmed</Text>

                <Text style={styles.text}>
                  Louis will assist you on your departure
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
  clouds: {
    height: 50,
    width: 450,
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#24325B",
  },
  h2: {
    paddingVertical: 15,
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: "#24325B",
  },
  item: {
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: "#DFEDF2",
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 16,
    paddingBottom: 8,
  },
  scheduleButton: {
    flex: 1,
    flexDirection: "row",
    minHeight: 50,
    width: 300,
    borderRadius: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderColor: "#57607C",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textScheduleButton: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#24325B",
  },
  startButton: {
    flex: 1,
    flexDirection: "row",
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: "#24325B",
    alignItems: "center",
    justifyContent: "center",
  },

  textButton: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

export default DepartureAssistanceScreen;
