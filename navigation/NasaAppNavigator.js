import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import PhotoGalleryScreen from "../screens/PhotoGalleryScreen";

const Stack = createNativeStackNavigator();

const NasaAppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Gallery"
        component={PhotoGalleryScreen}
        options={{
          title: "Photo Gallery",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

export default NasaAppNavigator;
