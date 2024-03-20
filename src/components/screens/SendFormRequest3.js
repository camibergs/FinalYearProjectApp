import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useFlightContext } from "../../context/FlightContext";
import { format, parseISO } from "date-fns";

const SendFormRequest3 = ({ navigation, route }) => {
  // Initialisations ------------------
  const { fullDetails } = route.params;
  // State ----------------------------
  // Handlers -------------------------
  const handleSubmitRequest = () => {
    navigation.navigate("ConfirmationRequest", { fullDetails: fullDetails });
    console.log(fullDetails);
  };

  // View -----------------------------
  return (
    <View style={styles.container}>
      <Text>Review your Request</Text>

      <Text>Your flight booking</Text>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>
          Flight Number: {fullDetails?.FlightNumber}
        </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>
          Airline Reference Number: {fullDetails?.AirlineRefNumber}
        </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>
          Flight Departure Date:{" "}
          {format(parseISO(fullDetails?.FlightDeparture), "PP")}
        </Text>
      </View>

      <Text>Your needs</Text>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>
          Type of assistance: {fullDetails?.selectedTypeAssist}
        </Text>
        <Text></Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>
          Additional information: {fullDetails?.additionalInfo}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          label="SubmitRequest"
          onPress={handleSubmitRequest}
        >
          <Text>Submit request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SendFormRequest3;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "white",
  },
  itemLabel: {
    color: "black",
    fontSize: 16,
    marginBottom: 5,
    padding: 10,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    gap: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButton: {
    flex: 1,
    flexDirection: "row",
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "grey",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  nextButton: {
    flex: 1,
    flexDirection: "row",
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "grey",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
