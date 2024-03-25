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
      <Text style={styles.heading}>Review your Request</Text>

      <View style={styles.subheadingBox}>
        <Text style={styles.subheading}>Your flight booking</Text>
      </View>
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
      <View style={styles.subheadingBox}>
        <Text style={styles.subheading}>Your needs</Text>
      </View>
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
          <Text style={styles.nextButtonText}> Submit request</Text>
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
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#56A0BB",
  },
  item: {
    backgroundColor: "#F0F4F8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2, // for Android
  },
  itemLabel: {
    color: "black",
    fontSize: 16,
    lineHeight: 24,
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
    marginTop: 20,
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
    backgroundColor: "#24325B",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
