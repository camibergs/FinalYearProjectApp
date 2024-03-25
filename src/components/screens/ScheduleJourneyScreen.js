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

const ScheduleJourneyScreen = ({ navigation, route }) => {
  // Initialisations --------------------------
  const flight = route.params.flight;

  // State ------------------------------------

  // Handlers ---------------------------------
  const gotoTrackJourneyScreen = () =>
    navigation.navigate("TrackJourneyScreen");

  const gotoDepartureAssistanceScreen = (flight) =>
    navigation.navigate("DepartureAssistanceScreen", { flight });

  // View -------------------------------------
  return (
    <ScreenView>
      <ScrollView style={styles.container}>
        <Pressable key={flight.FlightID}>
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.scheduleButton}
              label="Departure Assistance"
              onPress={() => gotoDepartureAssistanceScreen(flight)}
            >
              <Text style={styles.textScheduleButton}>
                {"Departure Assistance \n Set pick-up point"}
              </Text>
            </TouchableOpacity>
            <Text style={styles.text}>
              {format(parseISO(flight.FlightDeparture), "PP")}
            </Text>
            <Text style={styles.text}>
              Airline reference: {flight.AirlineRefNumber}
            </Text>

            <Text style={styles.text}>
              Flight number: {flight.FlightNumber}
            </Text>
            <TouchableOpacity
              style={styles.scheduleButton}
              label="Arrival Assistance"
            >
              <Text style={styles.textScheduleButton}>
                {"Arrival Assistance \n Set drop-off point"}
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>

        <TouchableOpacity
          style={styles.startButton}
          label="Track Journey"
          onPress={gotoTrackJourneyScreen}
        >
          <Text style={styles.textButton}>Start Track Journey</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#DFEDF2",
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
    padding: 20,
    //marginVertical: 20,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 16,
    paddingVertical: 10,
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
    paddingVertical: 8,
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

export default ScheduleJourneyScreen;
