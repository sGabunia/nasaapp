import React, { useState } from "react";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import DatePicker from "react-native-date-picker";
import HeaderText from "../components/HeaderText";
import NasaButton from "../components/NasaButton";

const PhotoGalleryScreen = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleDatePick = () => {
    setOpen(true);
  };
  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.imageBackground}
        source={require("../assets/space2.jpg")}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <HeaderText style={styles.title}>MARS & BEYOND</HeaderText>
          <Text style={styles.subtitle}>if we get lucky, maybe four years</Text>
        </View>
        <View style={styles.gallery}>
          <Image source={require("../assets/mars.jpg")} style={styles.image} />
          <View style={styles.description}>
            <HeaderText>Mars 2024</HeaderText>
            <Text
              style={{
                ...styles.subtitle,
                textTransform: "uppercase",
                textAlign: "center",
                fontSize: 13,
              }}
            >
              the road to making humanity multiplanetary
            </Text>
          </View>
          <NasaButton onPress={handleDatePick}>Choose Date Now</NasaButton>
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
          />
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
  gallery: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "80%",
    height: 400,
    padding: 15,
    marginTop: 30,
    backgroundColor: "rgba(204, 209, 209, 0.4)",
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
