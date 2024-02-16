import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { Button, ButtonTray } from "../UI/Button";
import Icons from "../UI/Icons";
import ScreenView from "../layout/ScreenView";
import initialFlights from "../../data/flights.js";

const HomeScreen = ({ navigation }) => {
  // Initialisations --------------------------
  console.log(navigation);
  // State ------------------------------------
  const [flights, setFlights] = useState(initialFlights);
  // Handlers ---------------------------------
  const gotoSendRequestScreen = () =>
    navigation.navigate("SendRequestScreen", { onAdd: onAdd });

  const handleSelect = () => alert("Item Selected");
  const handleAdd = (flight) => setFlights([...flights, flight]);

  const onAdd = (flight) => {
    setFlights([...flights, flight]);
  };
  // View -------------------------------------
  return (
    <ScreenView>
      <View style={styles.container}>
        <Text style={styles.introText}>Welcome to Glide</Text>
        <Image
          source={require("../../../assets/airport.png")}
          style={styles.airport}
        />
        <Text style={styles.text}>Request Special Assistance</Text>

        <ButtonTray>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonRequests}
              onPress={gotoSendRequestScreen}
            >
              <Icons.Form color="#24325B" />
              <Text style={styles.label}>Send Request</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonRequests}
              //onClick={gotoLiveChatScreen}
            >
              <Icons.LiveChat color="#24325B" />
              <Text style={styles.label}>Live Chat Request</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonRequests}
              //onClick={gotoCallScreen}
            >
              <Icons.Call color="#24325B" />
              <Text style={styles.label}>Call Request</Text>
            </TouchableOpacity>
          </View>
        </ButtonTray>
      </View>

      <Text style={styles.text}>Your requests</Text>

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
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  infoTray: {
    gap: 5,
  },
  introText: {
    paddingBottom: 15,
    fontSize: 24,
    fontWeight: "bold",
    color: "#24325B",
  },
  text: {
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#24325B",
  },
  airport: {
    height: 200,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTray: {
    flexDirection: "row",
    gap: 15,
  },
  buttonRequests: {
    height: 150,
    width: 122,
    borderRadius: 15,
    backgroundColor: "#C0E1EC",
    alignItems: "center",
    padding: 10,
  },
  label: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "#24325B",
    fontWeight: "bold",
  },
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
});

export default HomeScreen;
