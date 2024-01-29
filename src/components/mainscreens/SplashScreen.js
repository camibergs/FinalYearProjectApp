import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  // Initialisations --------------------------
  console.log(navigation);
  // State ------------------------------------
  // Handlers ---------------------------------
  const gotoHomeScreen = () => navigation.navigate("HomeScreen");

  // View -------------------------------------
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/splashscreen.png")}
        style={styles.splash}
      />
      <TouchableOpacity onPress={gotoHomeScreen} style={styles.button}>
        <Text style={styles.textButton}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splash: {
    height: "100%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    bottom: 250,
    width: 260,
    height: 55,
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: "#24325B",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  textButton: {
    fontSize: 20,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default SplashScreen;
