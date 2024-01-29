import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

const ScreenView = ({ children, style }) => {
  // Initialisations --------------------------
  // State ------------------------------------
  // Handlers ---------------------------------
  // View -------------------------------------
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ScreenView;
