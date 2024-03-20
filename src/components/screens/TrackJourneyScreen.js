import React, { useState, useEffect } from "react";
import MapView, { Marker, Callout, Circle } from "react-native-maps";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as Location from "expo-location";

export default function TrackJourneyScreen() {
  // Initialisations --------------------------

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
      <MapView
        style={styles.map}
        //initialRegion={pin}
        region={{
          latitude: pin.latitude,
          longitude: pin.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
      ></MapView>

      <View>
        <TouchableOpacity
          style={styles.shareButton}
          label="Track Journey"
          //onPress={gotoTrackJourneyScreen}
        >
          <Text style={styles.textButton}>Share Journey</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "85%",
  },
  shareButton: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    marginTop: 30,
    minHeight: 50,
    borderRadius: 7,
    backgroundColor: "#24325B",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
