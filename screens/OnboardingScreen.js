import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useFonts } from "../hooks/useFonts"; // Import the custom hook

const { width, height } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ccc" />
      </View>
    );
  }

  return (
    <Onboarding
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.replace("Login")}
      nextLabel={
        <View style={styles.nextButtonBackground}>
          <Text style={styles.nextButton}>Next</Text>
        </View>
      }
      skipLabel={<Text style={styles.skipButton}>Skip</Text>}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/images/onboar_01.jpeg")}
              style={{
                width: width * 0.8,
                height: height * 0.5,
                borderRadius: 32,
              }}
            />
          ),
          title: "All your favorites",
          subtitle:
            "Get all your loved foods in one once place you just place the order we do the rest",
          titleStyles: styles.customFontTitle,
          subTitleStyles: styles.customFontDesc,
        },
        {
          backgroundColor: "#fdeb93",
          image: (
            <Image
              source={require("../assets/images/onboar_02.jpeg")}
              style={{
                width: width * 0.8,
                height: height * 0.5,
                borderRadius: 32,
              }}
            />
          ),
          title: "All your favorites",
          subtitle:
            "Get all your loved foods in one once place you just place the order we do the rest",
          titleStyles: styles.customFontTitle,
          subTitleStyles: styles.customFontDesc,
        },
        {
          backgroundColor: "#e9bcbe",
          image: (
            <Image
              source={require("../assets/images/onboar_03.jpeg")}
              style={{
                width: width * 0.8,
                height: height * 0.5,
                borderRadius: 32,
              }}
            />
          ),
          title: "Order from chosen chef",
          subtitle:
            "Get all your loved foods in one once place you just place the order we do the rest",
          titleStyles: styles.customFontTitle,
          subTitleStyles: styles.customFontDesc,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customFontTitle: {
    fontFamily: "fontSenBold",
    fontSize: 32,
    fontWeight: "bold",
  },
  customFontDesc: {
    fontFamily: "fontSenThin",
    fontSize: 16,
  },
  nextButtonBackground: {
    backgroundColor: "#ff7622",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
  },
  nextButton: {
    color: "white",
    fontSize: 13,
  },
});

export default OnboardingScreen;
