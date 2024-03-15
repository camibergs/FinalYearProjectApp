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
import { parseISO, isAfter } from "date-fns";

const JourneyScreen = ({ navigation }) => {
  // Initialisations --------------------------
  // State ------------------------------------
  const [flights, setFlights] = useState(initialFlights);
  const [activeTab, setActiveTab] = useState("Upcoming");
  // Handlers ---------------------------------
  const isFlightUpcoming = (flightDeparture) => {
    const departureDate = parseISO(flightDeparture);
    return isAfter(departureDate, new Date());
  };

  const filteredFlights = flights.filter((flight) =>
    activeTab === "Upcoming"
      ? isFlightUpcoming(flight.FlightDeparture)
      : !isFlightUpcoming(flight.FlightDeparture)
  );

  const handleSelect = () => alert("Item Selected");

  const handleAdd = (flight) => setFlights([...flights, flight]);

  const onAdd = (flight) => {
    setFlights([...flights, flight]);
  };

  const gotoScheduleJourneyScreen = (flight) =>
    navigation.navigate("ScheduleJourneyScreen", { flight });
  // View -------------------------------------
  return (
    <ScreenView>
      <Image
        source={require("../../../assets/clouds.png")}
        style={styles.clouds}
      />
      <Text style={styles.h1}>Journeys</Text>
      <View style={styles.segmentedControlContainer}>
        <TouchableOpacity
          style={[
            styles.segmentButton,
            activeTab === "Upcoming" && styles.activeSegment,
          ]}
          onPress={() => setActiveTab("Upcoming")}
        >
          <Text style={styles.segmentButtonText}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.segmentButton,
            activeTab === "Archive" && styles.activeSegment,
          ]}
          onPress={() => setActiveTab("Archive")}
        >
          <Text style={styles.segmentButtonText}>Archive</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        {filteredFlights.map((flight) => {
          return (
            <Pressable key={flight.FlightID} onPress={handleSelect}>
              <View style={styles.item}>
                <Text style={styles.text}>{flight.FlightDeparture}</Text>
                <Text style={styles.text}>
                  {flight.FlightNumber} {flight.AirlineRefNumber}{" "}
                </Text>

                <TouchableOpacity
                  style={styles.scheduleButton}
                  label="Schedule Journey"
                  onPress={() => gotoScheduleJourneyScreen(flight)}
                >
                  <Text style={styles.textScheduleButton}>
                    Journey schedule
                  </Text>
                </TouchableOpacity>
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
  segmentedControlContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  segmentButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#24325B",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeSegment: {
    backgroundColor: "#24325B",
  },
  segmentButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
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
    alignItems: "center",
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

export default JourneyScreen;
