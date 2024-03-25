import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useFlightContext } from "../../context/FlightContext";
import Icons from "../UI/Icons";

const ConfirmationRequest = ({ navigation, route }) => {
  // Initialisations ------------------
  const { addFlight } = useFlightContext();
  const { fullDetails } = route.params;

  // State ----------------------------
  // Handlers -------------------------
  const goToHomeScreen = () => {
    addFlight(fullDetails);
    navigation.navigate("HomeScreen");
    console.log(fullDetails);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/backgroundCloud.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.confirmBox}>
        <View style={styles.greenTick}>
          <Icons.Check color={"#5CC533"} />
        </View>
        <Text style={styles.textConfirmation}>
          {
            "We have successfully sent \n your request to the airline \n and airpor staff."
          }
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            label="ViewRequest"
            onPress={goToHomeScreen}
          >
            <Text style={styles.textButton}>View request</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ConfirmationRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmBox: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    paddingHorizontal: 50,
    marginBottom: 100,
    borderColor: "#56A0BB",
    backgroundColor: "#DFEDF2",
  },
  greenTick: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    gap: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
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
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#24325B",
  },
  textConfirmation: {
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#24325B",
  },
});
