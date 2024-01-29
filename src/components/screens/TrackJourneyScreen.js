import React, { useState, useEffect } from "react";
import MapView, { Marker, Callout, Circle } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
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
      <MapView style={styles.map} initialRegion={pin} showsUserLocation={true}>
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
            <Text>This is a Callout</Text>
          </Callout>
        </Marker>

        <Circle center={pin} radius={100} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
