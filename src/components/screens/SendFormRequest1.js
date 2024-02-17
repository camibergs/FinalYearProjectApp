import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { Button, ButtonTray } from "../UI/Button.js";
import Icons from "../UI/Icons.js";
import ScreenView from "../layout/ScreenView.js";

const defaultFlightForm = {
  FlightID: null,
  FlightNumber: null,
  AirlineRefNumber: null,
  FlightDeparture: null,
};

const SendFormRequest1 = ({ navigation, route }) => {
  // Initialisations --------------------------
  const { onAdd } = route.params;
  defaultFlightForm.FlightID = Math.floor(100000 + Math.random() * 900000);

  // State ------------------------------------
  const [flights, setFlights] = useState(defaultFlightForm);
  // Handlers ---------------------------------
  const handleCancel = () => navigation.goBack();

  const handleAdd = () => onAdd(flights);

  const handleChange = (field, value) =>
    setFlights({ ...flights, [field]: value });

  const gotoSendFormRequest2 = () => navigation.navigate("SendFormRequest2");
  // View -------------------------------------
  return (
    <View style={styles.container}>
      <Text>Enter your flight details</Text>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Flight Number</Text>
        <TextInput
          value={flights.FlightNumber}
          placeholder="E.g. BA 1234"
          onChangeText={(value) => handleChange("FlightNumber", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Airline Reference Number</Text>
        <TextInput
          value={flights.AirlineRefNumber}
          placeholder="E.g. 9876543"
          onChangeText={(value) => handleChange("AirlineRefNumber", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Flight Departure Date</Text>
        <TextInput
          value={flights.FlightDeparture}
          placeholder="Select Date"
          onChangeText={(value) => handleChange("FlightDeparture", value)}
          style={styles.itemTextInput}
        />
      </View>

      <Text>
        {flights.FlightNumber} {flights.AirlineRefNumber}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.cancelButton}
          label="Save"
          onPress={handleAdd}
        >
          <Text>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextButton}
          label="Next"
          onPress={gotoSendFormRequest2}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
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

export default SendFormRequest1;
