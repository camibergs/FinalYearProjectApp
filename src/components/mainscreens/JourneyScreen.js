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
import ScreenView from "../layout/ScreenView";
import { parseISO, isAfter } from "date-fns";
import { useFlightContext } from "../../context/FlightContext.js";
import { startOfDay } from "date-fns";
import { format } from "date-fns";

const JourneyScreen = ({ navigation }) => {
  // Initialisations --------------------------

  // State ------------------------------------
  const { flights } = useFlightContext();
  const [activeTab, setActiveTab] = useState("Upcoming");

  // Handlers ---------------------------------
  const isFlightUpcoming = (flightDeparture) => {
    const departureDate = startOfDay(parseISO(flightDeparture));
    const currentDate = startOfDay(new Date());
    return isAfter(departureDate, currentDate);
  };

  const filteredFlights = flights.filter((flight) => {
    return activeTab === "Upcoming"
      ? isFlightUpcoming(flight.FlightDeparture)
      : !isFlightUpcoming(flight.FlightDeparture);
  });

  const gotoScheduleJourneyScreen = (flight) =>
    navigation.navigate("ScheduleJourneyScreen", { flight });
  // View -------------------------------------
  return (
    <ScreenView>
      <Image
        source={require("../../../assets/clouds.png")}
        style={styles.clouds}
      />
      <View style={styles.container}>
        <Text style={styles.h1}>Journeys</Text>
        <View style={styles.segmentedControlContainer}>
          <TouchableOpacity
            style={[
              styles.segmentButtonUpcoming,
              activeTab === "Upcoming"
                ? styles.activeSegment
                : styles.inactiveSegment,
            ]}
            onPress={() => setActiveTab("Upcoming")}
          >
            <Text style={styles.segmentButtonTextUpcoming}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.segmentButtonArchive,
              activeTab === "Archive"
                ? styles.activeSegment
                : styles.inactiveSegment,
            ]}
            onPress={() => setActiveTab("Archive")}
          >
            <Text style={styles.segmentButtonTextArchive}>Archive</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {filteredFlights.map((flight) => {
            return (
              <Pressable key={flight.FlightID}>
                <View style={styles.item}>
                  <Text style={styles.text}>
                    {format(parseISO(flight.FlightDeparture), "PP")}
                  </Text>
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
      </View>
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
    marginBottom: 10,
  },
  segmentedControlContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    borderRadius: 10,
  },
  segmentButtonUpcoming: {
    padding: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "#24325B",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  segmentButtonArchive: {
    padding: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#24325B",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeSegment: {
    backgroundColor: "#24325B",
    fontStyle: "#FFFFFF",
  },
  inactiveSegment: {
    backgroundColor: "#DFEDF2",
    color: "black",
  },
  segmentButtonTextUpcoming: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  segmentButtonTextArchive: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
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
