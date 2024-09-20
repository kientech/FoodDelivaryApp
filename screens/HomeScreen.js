import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  ViewBase,
} from "react-native";
import {
  Bars3BottomLeftIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  StarIcon,
  TruckIcon,
} from "react-native-heroicons/outline";
import getGreeting from "../helper/getGreeting";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
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
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={styles.cartButton}
          >
            <ShoppingBagIcon size={24} color={"white"} />
          </TouchableOpacity>
          <View style={styles.numberCart}>
            <Text style={styles.numberCartTitle}>2</Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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

        <View style={styles.categoryContainer}>
          <View style={styles.categoriesContent}>
            <Text style={styles.allCategories}>All Categories</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("AllCategories")}
            >
              <Text style={styles.seeAll}>See all {">"} </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{ marginTop: 20 }}
          >
            {[1, 2, 3, 4].map((item, index) => (
              <View style={styles.categoryComponent} key={index}>
                <Image
                  source={require("../assets/images/onboar_01.jpeg")}
                  style={{
                    width: "100%",
                    height: 120,
                    borderRadius: 16,
                  }}
                  resizeMode="cover"
                />
                <View style={styles.contentItem}>
                  <Text style={styles.titleFoodName}>Pizza</Text>
                  <View style={styles.contentFoodPrice}>
                    <Text style={styles.statusFood}>Starting</Text>
                    <Text style={styles.foodPrice}>50</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.categoryContainer}>
          <View style={styles.categoriesContent}>
            <Text style={styles.allCategories}>Open Restaurants</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("AllCategories")}
            >
              <Text style={styles.seeAll}>See all {">"} </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.openResContainer}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <View key={index} style={styles.openResItem}>
              <Image
                source={require("../assets/images/onboar_01.jpeg")}
                style={{ width: "100%", height: 200, borderRadius: 16 }}
              />
              <View style={styles.contentRes}>
                <Text style={styles.foodResName}>Rose garden restaurant</Text>
                <Text style={styles.menuName}>
                  Burger - Chiken - Riche - Wings{" "}
                </Text>
                <View style={styles.transformFood}>
                  <View style={styles.transformItem}>
                    <ClockIcon size={24} color={"#FC6E2A"} />
                    <Text style={styles.textItem}>20 mins</Text>
                  </View>

                  <View style={styles.transformItem}>
                    <StarIcon size={24} color={"#FC6E2A"} />
                    <Text style={styles.textItem}>4.7</Text>
                  </View>

                  <View style={styles.transformItem}>
                    <TruckIcon size={24} color={"#FC6E2A"} />
                    <Text style={styles.textItem}>Free</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    backgroundColor: "#F3F3F3",
    flex: 1,
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
    paddingBottom: 10,
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
    top: "30%",
    left: 10,
    alignItems: "center",
  },
  categoryContainer: {
    marginTop: 42,
  },
  categoriesContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  allCategories: {
    fontFamily: "fontSenBold",
    fontSize: 24,
  },
  seeAll: {
    fontFamily: "fontSenThin",
    fontSize: 16,
    color: "#FC6E2A",
  },
  categoryComponent: {
    width: 150,
    // height: 200,
    marginRight: 16,
    backgroundColor: "white",

    padding: 4,
    borderRadius: 16,
    shadowColor: "rgba(149, 157, 165, 0.2)",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.24,
    shadowRadius: 24,
  },
  contentItem: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleFoodName: {
    fontFamily: "fontSenBold",
    fontSize: 16,
  },
  contentFoodPrice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  statusFood: {
    fontFamily: "fontSenThin",
    fontSize: 16,
  },
  foodPrice: {
    fontFamily: "fontSenBold",
    fontSize: 16,
  },
  openResItem: {
    width: "100%",
  },
  openResContainer: {
    gap: 20,
    borderRadius: 16,
    marginTop: 16,
  },
  openResItem: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 16,
  },
  contentRes: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  foodResName: {
    fontFamily: "fontSenBold",
    fontSize: 22,
    marginBottom: 5,
  },
  menuName: {
    fontFamily: "fontSenThin",
    fontSize: 16,
  },
  transformFood: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  transformItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  textItem: {
    fontFamily: "fontSenThin",
    fontSize: 16,
  },
});

export default HomeScreen;
