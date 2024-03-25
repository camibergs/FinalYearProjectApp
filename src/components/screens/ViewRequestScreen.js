import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import ScreenView from "../layout/ScreenView";
import { format, parseISO } from "date-fns";

const ViewRequestScreen = ({ navigation, route }) => {
  // Initialisations --------------------------
  const flight = route.params.flight;

  // State ------------------------------------

  // Handlers ---------------------------------
  const gotoScheduleJourneyScreen = (flight) =>
    navigation.navigate("ScheduleJourneyScreen", { flight });

  // View -------------------------------------
  return (
    <ScreenView>
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <View style={styles.subheadingBox}>
            <Text style={styles.subheading}>Your request details</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textRequestH2}>
              Request for the {format(parseISO(flight.FlightDeparture), "PP")}
            </Text>
            <Text style={styles.textRequestH2}>Status: In Progress</Text>
            <View style={styles.subheadingBox}>
              <Text style={styles.subheading}>Your flight booking </Text>
            </View>
            <Text style={styles.textRequestH2}>
              Flight Number: {flight.FlightNumber}
            </Text>
            <Text style={styles.textRequestH2}>
              Booking Reference: {flight.AirlineRefNumber}
            </Text>
            <View style={styles.subheadingBox}>
              <Text style={styles.subheading}>Your needs</Text>
            </View>

            <Text style={styles.textRequestH2}>
              Type of Passenger: {flight.selectedTypeAssist}
            </Text>
            <Text style={styles.textRequestH2}>
              Additional Info: {flight.additionalInfo}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.startButton}
          label="View Journey"
          onPress={() => gotoScheduleJourneyScreen(flight)}
        >
          <Text style={styles.textButton}>View your journey</Text>
        </TouchableOpacity>
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
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#24325B",
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },
  subheadingBox: {
    borderRadius: 10,
    backgroundColor: "#56A0BB",
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
  textRequestH2: {
    fontSize: 18,
    color: "#24325B",
    lineHeight: 20,
    borderBottomWidth: 0.5,
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

export default ViewRequestScreen;
