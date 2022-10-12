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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useForm, Controller } from "react-hook-form";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import CustomText from "_components/customText/CustomText.js";
import BlackCustomButton from "_components/blackCustomButton/BlackCustomButton.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Stack = createStackNavigator();

const RegisterStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name=" " component={Register} />
    </Stack.Navigator>
  );
};

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
      userName: "",
      password: "",
      cPassword: "",
    },
  });

  const pwd = watch("password");

  const navigation = useNavigation();

  // font family declared
  const [fontsLoader] = useFonts({
    TenorSans: require("_assets/fonts/TenorSans-Regular.ttf"),
  });
  if (!fontsLoader) return null;

  // navigation for redirect

  async function createAccount() {}

  // screen
  const onSubmit = (data) => console.log(data);
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
                required: true,
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
                Password is required.
              </CustomText>
            )}
            {/* Confirm Password */}
            <Controller
              control={control}
              rules={{
                required: true,
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
            {errors.cpassword && (
              <CustomText style={styles.inputError}>
                {errors.cpassword.message || "Confirm password is required."}
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
