import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

const SendFormRequest3 = ({ navigation }) => {
  // Initialisations ------------------
  // State ----------------------------
  // Handlers -------------------------

  // View -----------------------------
  return (
    <View style={styles.container}>
      <Text>Please revise your answer and confirm</Text>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Flight Number</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Airline Reference Number</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Flight Departure Date</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Select type of passenger</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>If other, please specify:</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Please select one:</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          label="Next"
          //onPress={gotoSendFormRequest3}
        >
          <Text>Send request</Text>
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
