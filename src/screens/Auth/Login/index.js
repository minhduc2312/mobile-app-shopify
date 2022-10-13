import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Alert,
  Pressable,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useForm, Controller } from "react-hook-form";
import CustomText from "_components/customText/CustomText.js";
import BlackCustomButton from "_components/blackCustomButton/BlackCustomButton.js";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, db } from "_config/firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import firebase from "firebase/app";

const Stack = createStackNavigator();
const auth = getAuth();

const LoginStackNavigator = ({ navigation }) => {
  const tokens = [];
  const getData = async () => {
    const colRef = collection(db, "expo-tokens");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach((doc) => {
      const { token } = doc.data();
      tokens.push(token);
    });
    console.log(tokens);
  };
  getData();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

async function signIn(email, password) {
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
}

const Login = (props) => {
  // navigation for redirect
  const navigation = useNavigation();

  //  form state, form variable
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // font family declared
  const [fontsLoader] = useFonts({
    TenorSans: require("_assets/fonts/TenorSans-Regular.ttf"),
  });
  if (!fontsLoader) return null;

  // screen
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(navigation.navigate("HomeScreen"))
      .catch((error) => console.log(error));
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.inner}>
            {/* Header  */}
            <View style={styles.loginHeader}>
              <CustomText style={styles.loginHeaderText}>Login</CustomText>
            </View>

            {/* Underline */}
            <View style={styles.loginUnderLine}>
              <Image source={require("_assets/images/underline_img.png")} />
            </View>

            {/* Form */}
            <View style={styles.formContainer}>
              {/* Email */}
              <Controller
                control={control}
                rules={{
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} placeholder="Email" />
                )}
                name="email"
              />
              {/* Email Error */}
              {errors.email && <CustomText style={styles.inputError}>{errors.email.message || "Email is required."}</CustomText>}

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={[styles.input, { marginTop: 15 }]}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Password"
                    secureTextEntry={true}
                  />
                )}
                name="password"
              />
              {errors.password && <CustomText style={styles.inputError}>Password is required.</CustomText>}

              {/* Redirect to Register */}
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 45,
                }}
              >
                <CustomText>Don't have an account yet? </CustomText>
                <Pressable
                  onPress={() => {
                    navigation.navigate("RegisterScreen");
                  }}
                >
                  <CustomText style={{ color: "#0B0080" }}>Sign Up</CustomText>
                </Pressable>
              </View>
            </View>

            {/* Submit Button */}
            <View
              style={{
                marginTop: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BlackCustomButton style={styles.submitButton} color="#000000" title="Login" onPress={handleSubmit(onSubmit)} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  // Header
  loginHeader: {
    paddingTop: 30,
    alignItems: "center",
  },
  loginHeaderText: {
    fontSize: 25,
    lineGeight: 40,
    letterSpacing: 4,
  },
  // Underline
  loginUnderLine: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 30,
  },
  // Form
  formContainer: {
    paddingHorizontal: 40,
  },
  input: {
    height: 50,
    fontFamily: "TenorSans",
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#D4D4D4",
    marginBottom: 10,
  },
  inputError: {
    color: "#cc0000",
  },
  // Submit button
  submitButton: {
    width: 120,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
});
