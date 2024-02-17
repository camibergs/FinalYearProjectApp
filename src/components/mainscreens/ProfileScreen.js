import { StyleSheet, View, Text } from "react-native";
import ScreenView from "../layout/ScreenView";

const ProfileScreen = () => {
  // Initialisations --------------------------
  // State ------------------------------------
  // Handlers ---------------------------------
  // View -------------------------------------
  return (
    <ScreenView style={styles.container}>
      <Text style={styles.label}>Profile Screen</Text>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
  },
});

export default ProfileScreen;
