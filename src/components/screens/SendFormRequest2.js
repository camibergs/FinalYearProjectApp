import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const SendFormRequest2 = ({ navigation }) => {
  // Initialisations ------------------
  // State ----------------------------
  // Handlers -------------------------
  const gotoSendFormRequest3 = () => navigation.navigate("SendFormRequest3");
  // View -----------------------------
  return (
    <View style={styles.container}>
      <Text>Tell us about your needs</Text>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Select type of passenger</Text>
        <TextInput
          //value={flights.FlightNumber}
          placeholder="Select"
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>If other, please specify:</Text>
        <TextInput
          //value={flights.AirlineRefNumber}
          placeholder="Type here"
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Please select one:</Text>
        <TextInput
          //value={flights.FlightDeparture}
          placeholder="Solo traveller or accompanied"
          //onChangeText={(value) => handleChange("FlightDeparture", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          label="Save"
          //onPress={handleAdd}
        >
          <Text>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextButton}
          label="Next"
          onPress={gotoSendFormRequest3}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SendFormRequest2;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  itemLabel: {
    color: "grey",
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
