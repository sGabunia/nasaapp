import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  LogBox,
} from "react-native";

import DatePicker from "react-native-date-picker";
import HeaderText from "../components/HeaderText";
import NasaButton from "../components/NasaButton";

const PhotoGalleryScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  console.log(date);

  const handleDatePick = () => {
    setOpen(true);
  };

  const moveToDetailsScreen = () => {
    navigation.navigate("Details", {
      date: date,
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
        <View style={styles.galleryWrapper}>
          <View style={styles.gallery}>
            <NasaButton onPress={handleDatePick}>Choose Date Now</NasaButton>
            <NasaButton onPress={moveToDetailsScreen}>Get the image</NasaButton>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
              minimumDate={new Date("2021-01-01")}
              mode="date"
              textColor="firebrick"
            />
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
  imageBackground: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    backgroundColor: "#000",
  },
  galleryWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  gallery: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    height: 180,
    padding: 15,
    marginTop: 30,
    backgroundColor: "rgba(204, 209, 209, 0.3)",
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 20,
    marginVertical: "auto",
    position: "absolute",
    top: -25,
    left: 15,
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
