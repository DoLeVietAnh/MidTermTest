import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const IntroSlide = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/intro.jpg")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <Image source={require("./assets/carrot.png")} style={styles.image} />
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.title}>to our store</Text>
          <Text style={styles.subtitle}>
            Get your groceries in as fast as one hour
          </Text>
          <TouchableOpacity
            style={styles.introButton}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const SignIn = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/image.png")} // Replace with your image path
        style={styles.imageSigninBackground}
        resizeMode="cover"
      >
        <View style={styles.signInContent}>
          <Text style={styles.signInTitle}>Get your groceries</Text>
          <Text style={styles.signInTitle}>with nectar</Text>

          <View style={styles.flagContainer}>
            <Image source={require("./assets/flag.png")} style={styles.flag} />
            <Text style={styles.flagText}>+880</Text>
          </View>

          <View style={styles.lineBreak} />

          <Text style={styles.helloText}>or connect with social media</Text>

          <TouchableOpacity style={styles.signInButtonFB}>
            <Text style={styles.buttonTextFB}>Continue with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButtonGG}>
            <Text style={styles.buttonTextGG}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Intro"
          component={IntroSlide}
          options={{ headerShown: false }} // Hide the header for the Intro screen
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }} // Hide the header for the SignIn screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 10,
    paddingTop: 250,
    borderRadius: 10,
    maxWidth: "80%",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "lightgray",
  },
  introButton: {
    backgroundColor: "#7ABA78",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 350,
    height: 60,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  signInContent: {
    paddingTop: 100,
    padding: 20,
    width: "80%",
  },
  signInTitle: {
    fontSize: 32,
    color: "black",
    textAlign: "left",
    marginBottom: 10,
    fontWeight: "bold",
  },
  flagContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 10,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  flagText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  lineBreak: {
    height: 1,
    width: "100%",
    backgroundColor: "black",
    marginBottom: 20,
  },
  helloText: {
    fontSize: 20,
    color: "lightgray",
    textAlign: "center",
    marginBottom: 20,
  },
  signInButtonFB: {
    backgroundColor: "#3B5998",
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "100%",
  },
  signInButtonGG: {
    backgroundColor: "#DB4437",
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "100%",
  },

  imageSigninBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextFB: {
    backgroundColor: "#3B5998",
  },
  buttonTextGG: {
    backgroundColor: "#DB4437",
  },
});

export default App;
