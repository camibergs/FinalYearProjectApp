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
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#24325B",
    backgroundColor: "#C0E1EC",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    gap: 5,
    marginTop: 20,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "#24325B",
    fontWeight: "bold",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button;
