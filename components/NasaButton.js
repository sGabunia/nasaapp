import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const NasaButton = (props) => {
  const { onPress, style, children, arrow = false } = props;
  return (
    <Pressable
      {...props}
      style={{ ...styles.button, ...style }}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
      {arrow && (
        <MaterialIcons
          name="arrow-forward"
          size={24}
          color="black"
          style={{ marginLeft: 10 }}
        />
      )}
    </Pressable>
  );
};

export default NasaButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#53504F",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
