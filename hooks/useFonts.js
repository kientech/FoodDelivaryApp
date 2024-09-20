// useFonts.js
import { useState, useEffect } from "react";
import * as Font from "expo-font";

// Function to load fonts
const fetchFonts = () => {
  return Font.loadAsync({
    fontSenThin: require("../assets/fonts/Sen-VariableFont_wght.ttf"),
    fontSenBold: require("../assets/fonts/senbold.ttf"),
  });
};

export const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await fetchFonts();
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts", error);
      }
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};
