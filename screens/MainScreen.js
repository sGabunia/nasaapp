import React from "react";
import { ImageBackground, StyleSheet, View, StatusBar } from "react-native";
import HeaderText from "../components/HeaderText";
import NasaButton from "../components/NasaButton";

const MainScreen = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("Gallery");
  };
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ImageBackground
        source={require("../assets/space.jpg")}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.main}>
          <View>
            <HeaderText>Enjoyable </HeaderText>
            <HeaderText>experience of life</HeaderText>
            <HeaderText>in Space</HeaderText>
          </View>
          <NasaButton style={styles.button} onPress={handleNavigation}>
            Let's Start
          </NasaButton>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    flex: 1,
    padding: 15,
    paddingVertical: 25,
  },
  main: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    marginTop: 200,
  },
});
