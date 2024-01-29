import React from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";

export default function TrackJourneyScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.47002,
          longitude: -0.454295,
          latitudeDelta: 0.0095,
          longitudeDelta: 0.0095,
        }}
      >
        <Marker
          coordinate={{ latitude: 51.47002, longitude: -0.454295 }}
          title="Test Position Title"
          description="Test Description"
          pinColor="red"
        >
          <Callout>
            <Text>This is a Callout</Text>
          </Callout>
        </Marker>
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
