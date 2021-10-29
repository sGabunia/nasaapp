import React from "react";
import { StyleSheet, Text } from "react-native";

const HeaderText = (props) => {
  return <Text {...props} style={{ ...styles.title, ...props.style }}></Text>;
};

export default HeaderText;

const styles = StyleSheet.create({
  title: {
    fontSize: 27,
    fontFamily: "RobotoMono_500Medium",
    color: "#fff",
  },
});
