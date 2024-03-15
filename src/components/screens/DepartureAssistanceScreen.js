import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker, Callout, Circle } from "react-native-maps";
import * as Location from "expo-location";

const DepartureAssistanceScreen = ({ navigation, route }) => {
  // Initialisations --------------------------
  const flight = route.params.flight;
  // State ------------------------------------

  const [pin, setPin] = useState({
    latitude: 51.47002,
    longitude: -0.454295,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);

      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);
  // Handlers ---------------------------------

  // View -------------------------------------
  return (
    <View style={styles.container}>
      <View key={flight.FlightID} style={styles.item}>
        <Text style={styles.text}>Departure Assistance</Text>
        <Text style={styles.text}>Status: Confirmed</Text>
        <Text style={styles.text}>Louis will assist you on your departure</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.text}>Defaul pick-up point</Text>
        <Text style={styles.text}>Special Assistance Area Point</Text>
        <Text style={styles.text}>
          It is located in the departures hall opposites the check-in desks{" "}
        </Text>
        <MapView
          style={styles.map}
          //initialRegion={pin}
          region={{
            latitude: pin.latitude,
            longitude: pin.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
          showsUserLocation={true}
        >
          <Marker
            coordinate={pin}
            title="Test Position Title"
            description="Test Description"
            pinColor="red"
            draggable={true}
            onDragStart={(e) => {
              console.log("Drag Start", e.nativeEvent.coordinate);
            }}
            onDragEnd={(e) => {
              console.log("Drag End", e.nativeEvent.coordinate);

              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          >
            <Callout>
              <Text>Area A Point</Text>
            </Callout>
          </Marker>

          <Circle center={pin} radius={100} />
        </MapView>

        <TouchableOpacity
          style={styles.pickUpButton}
          label="Pick Up Point"
          //onPress={() => gotoDepartureAssistanceScreen(flight)}
        >
          <Text style={styles.textPickUpButton}>Select pick-up point</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#DFEDF2",
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
  item: {
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 16,
    paddingBottom: 8,
  },
  map: {
    borderRadius: 5,
    width: "100%",
    height: "55%",
  },
  pickUpButton: {
    flexDirection: "row",
    height: 50,
    width: 360,
    borderRadius: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderColor: "#57607C",
    backgroundColor: "#DFEDF2",
    alignItems: "center",
    justifyContent: "center",
  },
  textPickUpButton: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#24325B",
    paddingVertical: 8,
  },
});

export default DepartureAssistanceScreen;
