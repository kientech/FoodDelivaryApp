import React from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput } from "react-native";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/outline";
import getGreeting from "../helper/getGreeting";

const HomeScreen = () => {
  const greeting = getGreeting();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeContainer}>
        <View style={styles.deliveryContainer}>
          <View style={styles.buttonDelivery}>
            <Bars3BottomLeftIcon size={24} color={"#000"} />
          </View>
          <View>
            <Text style={styles.titleDelevery}>DELIVERY TO</Text>
            <Text style={styles.locationDelivery}>Ho Chi Minh City</Text>
          </View>
        </View>
        <View>
          <View style={styles.cartButton}>
            <ShoppingBagIcon size={24} color={"white"} />
          </View>
          <View style={styles.numberCart}>
            <Text style={styles.numberCartTitle}>2</Text>
          </View>
        </View>
      </View>

      <View style={styles.greetingContainer}>
        <Text style={styles.greetingName}>Hey Kien Duong Trung, </Text>
        <Text style={styles.greetingStatus}>{greeting}</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.glassIcon}>
          <MagnifyingGlassIcon size={24} color={"#000"} />
        </View>
        <TextInput
          placeholder="Search dishes, restaurant"
          style={styles.inputSearch}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  homeContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  deliveryContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonDelivery: {
    padding: 12,
    borderRadius: "100%",
    backgroundColor: "#ECF0F4",
  },
  titleDelevery: {
    fontFamily: "fontSenBold",
    fontSize: 13,
    color: "#FC6E2A",
  },
  locationDelivery: {
    color: "#000",
    fontSize: 16,
    fontFamily: "fontSenThin",
  },
  cartButton: {
    padding: 12,
    borderRadius: "100%",
    backgroundColor: "#FC6E2A",
    position: "relative",
  },
  numberCart: {
    padding: 6,
    backgroundColor: "#ECF0F4",
    borderRadius: "100%",
    position: "absolute",
    right: 0,
    top: -10,
  },
  numberCartTitle: {
    fontSize: 13,
    color: "#fc6e2a",
  },
  greetingContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    marginVertical: 16,
  },
  greetingName: {
    fontFamily: "fontSenThin",
    fontSize: 16,
  },
  greetingStatus: {
    fontFamily: "fontSenBold",
    fontSize: 16,
  },
  inputSearch: {
    padding: 12,
    height: 62,
    paddingLeft: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "relative",
  },
  glassIcon: {
    position: "absolute",
    zIndex: 1,
    top: '30%',
    left: 10,
    alignItems: "center",
  },
});

export default HomeScreen;
