import { StyleSheet, View, Text } from "react-native";
import { Button, ButtonTray } from "../UI/Button.js";
import TrackJourneyScreen from "../screens/TrackJourneyScreen.js";

import ScreenView from "../layout/ScreenView";

const JourneyScreen = ({ navigation }) => {
  // Initialisations --------------------------
  // State ------------------------------------
  // Handlers ---------------------------------
  const gotoTrackJourneyScreen = () =>
    navigation.navigate("TrackJourneyScreen");
  // View -------------------------------------
  return (
    <ScreenView>
      <Text>Journey Screen</Text>
      <ButtonTray>
        <Button label="Track Journey" onClick={gotoTrackJourneyScreen} />
      </ButtonTray>
    </ScreenView>
  );
};

const styles = StyleSheet.create({});

export default JourneyScreen;
