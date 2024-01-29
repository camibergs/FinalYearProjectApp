import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export const Button = ({ label, icon, onClick, styleLabel, styleButton }) => {
  // Initialisations ------------------
  // State ----------------------------
  // Handlers -------------------------
  // View -----------------------------
  return (
    <TouchableOpacity onPress={onClick} style={[styles.button, styleButton]}>
      <View style={styles.buttonContent}>
        {icon ? icon : null}
        <Text style={[styles.label, styleLabel]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const ButtonTray = ({ children }) => {
  // Initialisations ------------------
  // State ----------------------------
  // Handlers -------------------------
  // View -----------------------------
  return <View style={styles.buttonTray}>{children}</View>;
};

const styles = StyleSheet.create({
  buttonTray: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    height: 150,
    borderRadius: 15,
    backgroundColor: "#C0E1EC",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flex: 1,
    flexDirection: "row",
    gap: 5,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
  },
  buttonContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button;
