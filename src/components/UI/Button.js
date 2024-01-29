import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export const Button = ({ label, icon, onClick, styleLabel, styleButton }) => {
  // Initialisations ------------------
  // State ----------------------------
  // Handlers -------------------------
  // View -----------------------------
  return (
    <Pressable onPress={onClick} style={[styles.button, styleButton]}>
      <View style={styles.buttonContent}>
        {icon ? icon : null}
        <Text style={[styles.label, styleLabel]}>{label}</Text>
      </View>
    </Pressable>
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
    minHeight: 50,
    borderRadius: 8,
    borderColor: "#60A5E5",
    backgroundColor: "#60A5E5",
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
