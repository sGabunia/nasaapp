import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const NasaButton = (props) => {
  const { onPress, style, children } = props;
  return (
    <Pressable
      {...props}
      style={{ ...styles.button, ...style }}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
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
  },
  text: {
    color: "#53504F",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
