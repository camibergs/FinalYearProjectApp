import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Button, ButtonTray } from "../UI/Button";
import Icons from "../UI/Icons";
import ScreenView from "../layout/ScreenView";

const HomeScreen = ({ navigation }) => {
  // Initialisations --------------------------
  console.log(navigation);
  // State ------------------------------------
  // Handlers ---------------------------------
  const gotoSendRequestScreen = () => navigation.navigate("SendRequestScreen");

  // View -------------------------------------
  return (
    <ScreenView>
      <View style={styles.container}>
        <Text style={styles.introText}>Welcome to Glide</Text>
        <Image
          source={require("../../../assets/airport.png")}
          style={styles.airport}
        />
        <Text style={styles.text}>Request Special Assistance</Text>
        <ButtonTray>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonRequests}
              onPress={gotoSendRequestScreen}
            >
              <Icons.Form color="#24325B" />
              <Text style={styles.label}>Send Request</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonRequests}
              //onClick={gotoLiveChatScreen}
            >
              <Icons.LiveChat color="#24325B" />
              <Text style={styles.label}>Live Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonRequests}
              //onClick={gotoCallScreen}
            >
              <Icons.Call color="#24325B" />
              <Text style={styles.label}>Call</Text>
            </TouchableOpacity>
          </View>
        </ButtonTray>

        {/*<Text style={styles.text}>Your requests</Text>*/}
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  infoTray: {
    gap: 5,
  },
  introText: {
    paddingBottom: 15,
    fontSize: 24,
    fontWeight: "bold",
    color: "#24325B",
  },
  text: {
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#24325B",
  },
  airport: {
    height: 200,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTray: {
    flexDirection: "row",
    gap: 15,
  },
  buttonRequests: {
    height: 150,
    width: 122,
    borderRadius: 15,
    backgroundColor: "#C0E1EC",
    alignItems: "center",
    padding: 10,
  },
  label: {
    marginTop: 50,
    fontSize: 18,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "#24325B",
    fontWeight: "bold",
  },
});

export default HomeScreen;
