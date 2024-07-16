import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome";

const IntroSlide = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
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

function IconButton({ name, text, backgroundColor }) {
  return (
    <TouchableOpacity style={[styles.iconButton, { backgroundColor }]}>
      <Icon name={name} size={20} color="white" style={styles.iconLeft} />
      <Text style={styles.iconButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const SignIn = () => {
  return (
    <View style={styles.signInContainer}>
      <StatusBar barStyle="dark-content" hidden={false} />
      <Image source={require("./assets/image.png")} style={styles.topImage} />
      <Text style={styles.signInText}>Get your groceries</Text>
      <Text style={styles.nectarText}>with nectar</Text>
      <View style={styles.inputContainer}>
        <Image source={require("./assets/flag.png")} style={styles.phoneIcon} />
        <Text style={styles.phoneText}>+880</Text>
      </View>

      <View style={styles.lineBreak} />

      <Text style={styles.socialText}>Or connect with social media</Text>
      <IconButton
        name="google"
        text="Continue with Google"
        backgroundColor="#4B70F5"
        style={{ marginBottom: 20 }}
      />
      <IconButton
        name="facebook"
        text="Continue with Facebook"
        backgroundColor="#3B5998"
      />
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
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
  signInContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FCFCFC",
    hue: "hsl(0, 0%, 99%)",
  },
  topImage: {
    width: "100%",
    height: 450,
    resizeMode: "cover",
  },
  signInText: {
    marginTop: 20,
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 36,
  },
  nectarText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 36,
    paddingBottom: 20,
  },
  inputContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    alignSelf: "flex-start",
    marginLeft: 36,
  },
  lineBreak: {
    height: 1,
    width: "82.5%",
    backgroundColor: "lightgray",
    marginBottom: 20,
  },
  phoneIcon: {
    height: 30,
    width: 50,
    marginRight: 10,
    height: 35,
    width: 35,
  },
  phoneText: {
    fontSize: 20,
    color: "black",
  },
  socialText: {
    color: "gray",
    fontSize: 15,
    marginVertical: 20,
    marginBottom: 45,
    textAlign: "center",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 300,
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
    height: 50,
  },
  iconLeft: {
    marginRight: 45,
  },
  iconButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default App;
