import { StyleSheet, Text } from "react-native";
import { Button, ButtonTray } from "../UI/Button.js";
import Icons from "../UI/Icons";
import ScreenView from "../layout/ScreenView";

const SendRequestScreen = ({ navigation, route }) => {
  // Initialisations --------------------------
  // State ------------------------------------
  // Handlers ---------------------------------
  const handleCancel = () => navigation.goBack();
  // View -------------------------------------
  return (
    <ScreenView>
      <Text>Send request</Text>
      <ButtonTray>
        <Button label="Submit" icon={<Icons.Add />} />
        <Button label="Cancel" onClick={handleCancel} />
      </ButtonTray>
    </ScreenView>
  );
};

const styles = StyleSheet.create({});

export default SendRequestScreen;
