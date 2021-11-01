import React, { useState, useEffect } from "react";
import getData from "../services/api";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";

const PhotoDetails = ({ route }) => {
  const { date } = route.params;
  const [{ imageInfo, status, error }, setImageDetails] = useState({
    imageInfo: {},
    status: "idle",
    error: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setImageDetails({ imageInfo: {}, error: false, status: "pending" });
        const imageData = await getData.getImage(date);
        setImageDetails({
          status: "resolved",
          error: false,
          imageInfo: {
            title: imageData.title,
            copyright: imageData.copyright,
            imageUrl: imageData.url,
            explanation: imageData.explanation,
          },
        });
      } catch (error) {
        setImageDetails({ imageInfo: {}, status: "resolved", error: true });
      }
    };
    fetchData();
  }, [date]);

  if (status === "idle" || status === "pending") {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="00ff00" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>There is no data on your request</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen}>
      <Image
        source={{ uri: imageInfo.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.copyright}>
        Photo by {imageInfo.copyright || "uknown author"}
      </Text>
      <Text style={styles.title}>{imageInfo.title}</Text>
      <Text>{imageInfo.explanation}</Text>
    </ScrollView>
  );
};

export default PhotoDetails;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 12,
  },
  copyright: {
    fontStyle: "italic",
    fontSize: 13,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: "red",
    fontSize: 18,
  },
});
