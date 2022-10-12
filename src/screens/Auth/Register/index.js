import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useForm, Controller } from "react-hook-form";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import CustomText from "_components/customText/CustomText.js";
import BlackCustomButton from "_components/blackCustomButton/BlackCustomButton.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Stack = createStackNavigator();
const auth = getAuth();

const RegisterStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

async function createUser(email, password) {
  try {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((err) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode : ", errorCode);
        console.log("errorMessage : ", errorMessage);
      });
  } catch (error) {
    console.log(error);
  }
}

const Register = (props) => {
  //  form state, form variable
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      cPassword: "",
    },
  });

  const pwd = watch("password");

  // navigation for redirect
  const navigation = useNavigation();

  // font family declared
  const [fontsLoader] = useFonts({
    TenorSans: require("_assets/fonts/TenorSans-Regular.ttf"),
  });
  if (!fontsLoader) return null;

  // Submit function
  const onSubmit = (data) => {
    createUser(data.email, data.password);
  };

  // screen
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <ScrollView>
        <View style={styles.inner}>
          {/* Header  */}
          <View style={styles.registerHeader}>
            <CustomText style={styles.registerHeaderText}>Register</CustomText>
          </View>

          {/* Underline */}
          <View style={styles.registerUnderLine}>
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
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Email"
                />
              )}
              name="email"
            />
            {/* Email Error */}
            {errors.email && (
              <CustomText style={styles.inputError}>
                {errors.email.message || "Email is required."}
              </CustomText>
            )}

            {/* Password */}
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 8,
                  message: "Password is 8 characters long",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input, { marginTop: 10 }]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Password"
                  secureTextEntry={true}
                />
              )}
              name="password"
            />
            {/* Password Error */}
            {errors.password && (
              <CustomText style={styles.inputError}>
                {errors.password.message}
              </CustomText>
            )}

            {/* Confirm Password */}
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Confirm password is required",
                },
                minLength: {
                  value: 8,
                  message: "Confirm password is 8 characters long",
                },
                validate: (value) =>
                  value === pwd ||
                  "Confirm password do not match, please try again.",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input, { marginTop: 10 }]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                />
              )}
              name="cPassword"
            />
            {/* Confirm Password Error */}
            {errors.cPassword && (
              <CustomText style={styles.inputError}>
                {errors.cPassword.message || "Confirm password is required."}
              </CustomText>
            )}

            {/* Redirect to Login */}
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 45,
              }}
            >
              <CustomText>Already have an account? </CustomText>
              <Pressable
                onPress={() => {
                  navigation.navigate("LoginScreen");
                }}
              >
                <CustomText style={{ color: "#0B0080" }}>Sign In</CustomText>
              </Pressable>
            </View>
          </View>
          {/* Submit Button */}
          <View style={styles.registerSubmitBtn}>
            <BlackCustomButton
              color="#000000"
              title="Register"
              onPress={handleSubmit(onSubmit)}
              style={styles.submitButton}
            />
          </View>
        </View>
      </ScrollView>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
};

export default RegisterStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  // Header
  registerHeader: {
    paddingTop: 30,
    alignItems: "center",
  },
  registerHeaderText: {
    fontSize: 25,
    lineGeight: 40,
    letterSpacing: 4,
  },
  // Underline
  registerUnderLine: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 30,
  },
  // Form
  formContainer: {
    paddingHorizontal: 20,
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
  registerSubmitBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 50,
  },
});
