import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  LogBox,
  Alert,
} from "react-native";

import HeaderText from "../components/HeaderText";
import NasaButton from "../components/NasaButton";
import ModePicker from "../components/ModePicker";
import ChoosenDatePicker from "../components/ChoosenDatePicker";

const PhotoGalleryScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [modeValue, setModeValue] = useState(null);

  const handleDatePick = () => {
    setOpen(true);
  };

  const moveToDetailsScreen = () => {
    if (!date || !modeValue) {
      Alert.alert(
        "Enter more details",
        "Enter date and choose mode",
        [{ text: "OK", style: "cancel" }],
        { cancelable: true }
      );
      return;
    }
    navigation.navigate("Details", {
      date: date,
      mode: modeValue,
    });
  };

  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../assets/space2.jpg")}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <HeaderText style={styles.title}>SPACE & BEYOND</HeaderText>
          <Text style={styles.subtitle}>if we get lucky, maybe four years</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.dateWrapper}>
            <Text style={styles.date}>{date.toLocaleDateString()}</Text>
          </View>
          <View style={styles.galleryWrapper}>
            <View style={styles.gallery}>
              <NasaButton onPress={handleDatePick}>Choose Date</NasaButton>
              <View style={styles.mode}>
                <ModePicker modeValue={modeValue} setModeValue={setModeValue} />
              </View>
              <NasaButton onPress={moveToDetailsScreen} arrow>
                Get the image
              </NasaButton>
              <ChoosenDatePicker
                date={date}
                setDate={setDate}
                open={open}
                setOpen={setOpen}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PhotoGalleryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    padding: 15,
    backgroundColor: "#000",
  },
  galleryWrapper: {
    alignItems: "center",
    width: "100%",
    marginTop: 30,
    padding: 10,
  },
  dateWrapper: {
    padding: 15,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 15,
  },
  date: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  gallery: {
    width: "90%",
    padding: 25,
    backgroundColor: "rgba(204, 209, 209, 0.3)",
    borderRadius: 20,
  },
  mode: {
    marginVertical: 20,
  },
  description: {
    alignItems: "center",
    marginBottom: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    fontFamily: "RobotoMono_700Bold",
    fontSize: 18,
    letterSpacing: 5,
  },
  subtitle: {
    fontSize: 12,
    color: "#fff",
  },
});
