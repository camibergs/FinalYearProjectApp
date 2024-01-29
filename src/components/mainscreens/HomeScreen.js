import { StyleSheet, View, Text, Image } from "react-native";
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

        <View style={styles.container}>
          <ButtonTray>
            <Button
              label="Send Request"
              icon={<Icons.Form color="white" />}
              style={styles.buttonRequests}
              onClick={gotoSendRequestScreen}
            />
            <Button
              label="Live Chat"
              icon={<Icons.LiveChat color="white" />}
              style={styles.buttonRequests}
              //onClick={gotoLiveChatScreen}
            />
            <Button
              label="Call"
              icon={<Icons.Call color="white" />}
              style={styles.buttonRequests}
              //onClick={gotoCallScreen}
            />
          </ButtonTray>
        </View>

        <Text style={styles.text}>Your requests</Text>
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  infoTray: {
    gap: 5,
  },
  introText: {
    paddingBottom: 15,
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  airport: {
    height: 200,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
