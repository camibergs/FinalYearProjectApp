import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

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

  const handleAdd = () => {
    onAdd(flights, setFlights);
    navigation.navigate("HomeScreen");
  };

  const handleChange = (field, value) =>
    setFlights({ ...flights, [field]: value });

  const gotoSendFormRequest2 = () => navigation.navigate("SendFormRequest2");
  // View -------------------------------------
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Enter your flight details</Text>
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
          <Text style={styles.textSaveButton}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextButton}
          label="Next"
          onPress={gotoSendFormRequest2}
        >
          <Text style={styles.textNextButton}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "white",
  },
  h2: {
    paddingVertical: 15,
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: "#24325B",
  },
  itemLabel: {
    color: "#24325B",
    fontSize: 16,
    marginBottom: 5,
    padding: 10,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    color: "white",
    backgroundColor: "#DFEDF2",
    borderRadius: 7,
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
    borderWidth: 2,
    borderRadius: 7,
    borderColor: "#24325B",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textSaveButton: {
    color: "#24325B",
    fontSize: 16,
    fontWeight: "bold",
  },
  nextButton: {
    flex: 1,
    flexDirection: "row",
    minHeight: 50,
    borderRadius: 7,
    backgroundColor: "#24325B",
    alignItems: "center",
    justifyContent: "center",
  },
  textNextButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SendFormRequest1;
