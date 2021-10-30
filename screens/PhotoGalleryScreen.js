import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import getData from "../services/api";
import DatePicker from "react-native-date-picker";
import HeaderText from "../components/HeaderText";
import NasaButton from "../components/NasaButton";

const PhotoGalleryScreen = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [imageDetails, setImageDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const ImageData = await getData.getImage(date);

      setImageDetails({
        title: ImageData.title,
        imageUrl: ImageData.url,
        author: ImageData.copyright,
      });
    };
    fetchData();
  }, [date]);

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
          <HeaderText style={styles.title}>SPACE & BEYOND</HeaderText>
          <Text style={styles.subtitle}>if we get lucky, maybe four years</Text>
        </View>
        <View style={styles.gallery}>
          <Image
            source={{ uri: imageDetails?.imageUrl }}
            style={styles.image}
          />
          <View style={styles.description}>
            <HeaderText numberOfLines={1}>{imageDetails.author}</HeaderText>
            <Text
              style={{
                ...styles.subtitle,
                textTransform: "uppercase",
                textAlign: "center",
                fontSize: 13,
              }}
            >
              {imageDetails.title}
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
