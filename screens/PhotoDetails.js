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
  const { date, mode } = route.params;
  const [{ imageInfo, status, error }, setImageDetails] = useState({
    imageInfo: {},
    status: "idle",
    error: false,
  });

  const fetchData = async (choosenDate) => {
    try {
      setImageDetails({ imageInfo: {}, error: false, status: "pending" });
      const imageData = await getData.getImage(choosenDate);
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

  useEffect(() => {
    fetchData(date);
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
        style={{ ...styles.image, height: mode === "full" ? 300 : 500 }}
        resizeMode="cover"
      />
      {mode === "full" && (
        <View>
          <Text style={styles.copyright}>
            Photo by {imageInfo.copyright || "uknown author"}
          </Text>
          <Text style={styles.title}>{imageInfo.title}</Text>
          <View style={styles.explanation}>
            <Text>{imageInfo.explanation}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default PhotoDetails;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    paddingBottom: 25,
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
  explanation: {
    paddingBottom: 25,
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
