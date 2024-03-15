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
  const gotoSendFormRequest1 = () =>
    navigation.navigate("SendFormRequest1", { onAdd: onAdd });

  const gotoViewRequestScreen = (flight) =>
    navigation.navigate("ViewRequestScreen", { flight });

  const handleSelect = () => alert("Item Selected");

  const onAdd = (flight) => {
    setFlights([...flights, flight]);
  };
  // View -------------------------------------
  return (
    <ScreenView>
      <Image
        source={require("../../../assets/clouds.png")}
        style={styles.clouds}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.h1}>Welcome to Glide</Text>

        <Text style={styles.h2}>Request Special Assistance</Text>

        <ButtonTray>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonRequests}
              onPress={gotoSendFormRequest1}
            >
              <Image
                source={require("../../../assets/images/SendFormImage.png")}
                style={styles.imagesRequest}
              />
              <Text style={styles.label}>Send Form Request</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonRequests}
              //onClick={gotoLiveChatScreen}
            >
              <Image
                source={require("../../../assets//images/LiveChatImage.png")}
                style={styles.imagesRequest}
              />
              <Text style={styles.label}>Live Chat Request</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonRequests}
              //onClick={gotoCallScreen}
            >
              <Image
                source={require("../../../assets/images/CallRequestImage.png")}
                style={styles.imagesRequest}
              />
              <Text style={styles.label}>Call Request</Text>
            </TouchableOpacity>
          </View>
        </ButtonTray>

        <Text style={styles.h3}>Your requests</Text>

        <View>
          {flights.map((flight) => {
            return (
              <Pressable
                key={flight.FlightID}
                onPress={() => gotoViewRequestScreen(flight)}
              >
                <View style={styles.item}>
                  <View style={styles.textContainer}>
                    <Text style={styles.textRequestH1}>
                      Request for the {flight.FlightDeparture}
                    </Text>
                    <Text style={styles.textRequestH2}>
                      Flight Number: {flight.FlightNumber}
                    </Text>
                    <Text style={styles.textRequestH2}>Status: Confirmed</Text>
                  </View>
                  <Icons.RightArrow />
                </View>
              </Pressable>
            );
          })}
        </View>
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
  h3: {
    paddingVertical: 15,
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "#24325B",
  },

  clouds: {
    height: 50,
    width: 450,
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
    borderColor: "#56A0BB",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    backgroundColor: "#DFEDF2",
    alignItems: "center",
    padding: 10,
  },
  imagesRequest: {
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "#24325B",
  },
  item: {
    borderRadius: 15,
    borderColor: "#56A0BB",
    backgroundColor: "#DFEDF2",
    marginBottom: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  textRequestH1: {
    fontSize: 18,
    color: "#24325B",
    fontWeight: "600",
  },
  textRequestH2: {
    fontSize: 16,
    color: "#24325B",
  },
});

export default HomeScreen;
