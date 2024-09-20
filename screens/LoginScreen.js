import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/onboar_02.jpeg")}
          style={{ width: "100%", height: "100%" }}
        />
        <View style={styles.loginTitleContainer}>
          <Text style={styles.loginTitle}>Login</Text>
          <Text style={styles.loginDesc}>Please log in to visit</Text>
        </View>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email} // Controlled value
            onChangeText={setEmail} // Update the state on input change
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password} // Controlled value
            onChangeText={setPassword} // Update the state on input change
          />
        </View>
        <View style={styles.recoverPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.recoverPasswordText}>Recover Password</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUp}>
          <Text style={styles.dontHave}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.anotherSignUp}>
          <Text style={styles.or}>Or</Text>
          <View style={styles.socialSignUp}>
            <TouchableOpacity>
              <Image source={require("../assets/icons/facebook.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../assets/icons/twitter.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../assets/icons/apple.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "50%",
  },
  loginContainer: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: "-40%",
    width: "100%",
    height: "50%",
    padding: 32,
  },
  loginTitleContainer: {
    position: "absolute",
    top: "20%",
    width: "100%",
  },
  loginTitle: {
    textAlign: "center",
    fontFamily: "fontSenBold",
    fontSize: "32px",
    color: "white",
  },
  loginDesc: {
    fontFamily: "fontSenThin",
    textAlign: "center",
    fontSize: "16px",
    marginTop: 10,
    color: "white",
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
    fontFamily: "fontSenThin",
  },
  input: {
    height: 60,
    borderColor: "#F0F5FA",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: "#F0F5FA",
    color: "#A0A5BA",
  },
  recoverPasswordContainer: {
    width: "100%",
  },
  recoverPasswordText: {
    alignSelf: "flex-end",
    color: "#FF7622",
    fontSize: 16,
  },
  loginButton: {
    width: "100%",
    height: 60,
    backgroundColor: "#ff7622",
    borderRadius: 8,
    marginTop: 32,
  },
  loginButtonText: {
    textAlign: "center",
    lineHeight: 60,
    color: "white",
    fontFamily: "fontSenBold",
    fontSize: 16,
  },
  signUp: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  dontHave: {
    fontFamily: "fontSenThin",
    fontSize: 16,
  },
  signUpText: {
    fontFamily: "fontSenBold",
    color: "#ff7622",
    marginLeft: 4,
    fontSize: 16,
  },
  anotherSignUp: {
    marginTop: 32,
  },
  or: {
    fontFamily: "fontSenBold",
    textAlign: "center",
  },
  socialSignUp: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    marginTop: 32,
  },
});
