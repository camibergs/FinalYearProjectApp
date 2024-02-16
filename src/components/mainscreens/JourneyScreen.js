import { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { Button, ButtonTray } from "../UI/Button.js";
import TrackJourneyScreen from "../screens/TrackJourneyScreen.js";
import initialFlights from "../../data/flights.js";
import ScreenView from "../layout/ScreenView";

const JourneyScreen = ({ navigation }) => {
  // Initialisations --------------------------
  // State ------------------------------------
  const [flights, setFlights] = useState(initialFlights);
  // Handlers ---------------------------------
  const handleSelect = () => alert("Item Selected");

  const handleAdd = (flight) => setFlights([...flights, flight]);

  const onAdd = (flight) => {
    setFlights([...flights, flight]);
  };

  const gotoTrackJourneyScreen = () =>
    navigation.navigate("TrackJourneyScreen");
  // View -------------------------------------
  return (
    <ScreenView>
      <Text>Your Journeys</Text>

      <ScrollView style={styles.container}>
        {flights.map((flight) => {
          return (
            <Pressable key={flight.FlightID} onPress={handleSelect}>
              <View style={styles.item}>
                <Text style={styles.text}>
                  {flight.FlightDeparture} {flight.FlightNumber}{" "}
                  {flight.AirlineRefNumber}{" "}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>

      <ButtonTray>
        <Button label="Track Journey" onClick={gotoTrackJourneyScreen} />
      </ButtonTray>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  text: {
    fontSize: 16,
  },
});

export default JourneyScreen;
