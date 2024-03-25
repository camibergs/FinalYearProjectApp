import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const typeAssist = [
  { label: "WCHR (Wheel Chair Ramp)", value: "WCHR" },
  { label: "WCHS (Wheel Chair Stair)", value: "WCHS" },
  { label: "WCHC (Wheel Chair Cabin)", value: "WCHC" },
  { label: "Deaf", value: "deaf" },
  { label: "Blind", value: "blind" },
  { label: "Deaf/Blind", value: "deafBlind" },
  { label: "DPNA", value: "dpna" },
];

const SendFormRequest2 = ({ navigation, route }) => {
  // Initialisations ------------------

  // State ----------------------------
  const [selectedTypeAssist, setSelectedTypeAssist] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState("");
  // Handlers -------------------------

  const selectType = (value) => {
    setSelectedTypeAssist(value);
  };

  const gotoSendFormRequest3 = () => {
    const { flightDetails } = route.params;

    const fullDetails = {
      ...flightDetails,
      selectedTypeAssist: selectedTypeAssist,
      additionalInfo: additionalInfo,
    };
    navigation.navigate("SendFormRequest3", { fullDetails });
  };

  // View -----------------------------
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.h2}>Tell us about your needs</Text>
      <Text style={styles.itemLabel}>
        Please select the most applicable to you:
      </Text>

      {typeAssist.map((type) => (
        <Pressable
          key={type.value}
          style={styles.option}
          onPress={() => selectType(type.value)}
        >
          <View style={styles.radioCircle}>
            {selectedTypeAssist === type.value && (
              <View style={styles.selectedRb} />
            )}
          </View>
          <Text style={styles.radioText}>{type.label}</Text>
        </Pressable>
      ))}

      <View style={styles.item}>
        <Text style={styles.itemLabel}>
          Additional information you'd like to provide:
        </Text>
        <TextInput
          value={additionalInfo}
          onChangeText={setAdditionalInfo}
          placeholder="Type here"
          style={styles.itemTextInput}
          multiline
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
    </ScrollView>
  );
};

export default SendFormRequest2;

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
    color: "black",
    fontSize: 14,
    marginBottom: 5,
    padding: 10,
  },
  itemTextInput: {
    height: 80,
    paddingLeft: 10,
    fontSize: 16,
    //borderWidth: 1,
    flexDirection: "row",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#DFEDF2",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 100,
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    //borderWidth: 1,
    backgroundColor: "#DFEDF2",
  },
  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#24325B",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectedRb: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: "#24325B",
  },
  radioText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#24325B",
  },
});
