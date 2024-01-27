import { StyleSheet, View, Text } from "react-native";
import { Button, ButtonTray } from "../UI/Button";
import Icons from "../UI/Icons";
import ScreenView from "../layout/ScreenView";

const HomeScreen = () => {
  // Initialisations --------------------------
  // State ------------------------------------
  // Handlers ---------------------------------
  //const gotoSendRequestScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  // View -------------------------------------
  return (
    <ScreenView style={styles.container}>
      <Text style={styles.introText}>Hi, Good morning!</Text>
      <Text style={styles.text}>Request Special Assistance</Text>

      <View style={styles.container}>
        <ButtonTray>
          <Button
            label="Send Request"
            icon={<Icons.Form color="white" />}
            style={styles.buttonRequests}
            //onClick={gotoSendRequestScreen}
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
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  infoTray: {
    gap: 5,
  },
  introText: {
    paddingBottom: 40,
    fontSize: 18,
  },
  text: {
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  dimText: {
    color: "grey",
  },
});

export default HomeScreen;
