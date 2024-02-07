import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { Button, ButtonTray } from "../UI/Button.js";
import Icons from "../UI/Icons";
import ScreenView from "../layout/ScreenView";

const defaultRequestForm = {
  FlightID: null,
  FlightNumber: null,
  AirlineRefNumber: null,
  FlightDeparture: null,
};

const SendRequestScreen = ({ navigation, route }) => {
  // Initialisations --------------------------

  defaultRequestForm.FlightID = Math.floor(100000 + Math.random() * 900000);

  // State ------------------------------------
  const [flight, setFlight] = useState(defaultRequestForm);
  // Handlers ---------------------------------
  const handleCancel = () => navigation.goBack();

  const handleAdd = () => onAdd(flight);

  const handleChange = (field, value) =>
    setFlight({ ...flight, [field]: value });
  // View -------------------------------------
  return (
    <View style={styles.container}>
      <Text>Enter your flight details</Text>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Flight Number</Text>
        <TextInput
          value={module.FlightNumber}
          onChangeText={(value) => handleChange("FlightNumber", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Airline Reference Number</Text>
        <TextInput
          value={flight.AirlineRefNumber}
          onChangeText={(value) => handleChange("AirlineRefNumber", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Flight Departure Date</Text>
        <TextInput
          value={flight.FlightDeparture}
          onChangeText={(value) => handleChange("FlightDeparture", value)}
          style={styles.itemTextInput}
        />
      </View>

      <ButtonTray>
        <Button label="Submit" />
        <Button label="Cancel" onClick={handleCancel} />
      </ButtonTray>
    </View>
  );
};

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
});

export default SendRequestScreen;
