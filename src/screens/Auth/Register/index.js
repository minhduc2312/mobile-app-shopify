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
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useForm, Controller } from "react-hook-form";
import CustomText from "_components/customText/CustomText.js";
import BlackCustomButton from "_components/blackCustomButton/BlackCustomButton.js";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const RegisterStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="RegisterPage" component={Register} />
    </Stack.Navigator>
  );
};

const Register = (props) => {
  //  form state, form variable
  const {
    control,
    handleSubmit,
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

  // font family declared
  const [fontsLoader] = useFonts({
    TenorSans: require("_assets/fonts/TenorSans-Regular.ttf"),
  });
  if (!fontsLoader) return null;

  // navigation for redirect
  const navigation = useNavigation();

  // screen
  const onSubmit = (data) => console.log(data);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View>
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

          {/* User Name */}
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
                placeholder="User name"
              />
            )}
            name="userName"
          />
          {/* User Name Error */}
          {errors.password && (
            <CustomText style={styles.inputError}>
              User name is required.
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
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, { marginTop: 10 }]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Confirm Password"
              />
            )}
            name="cpassword"
          />
          {/* Confirm Password Error */}
          {errors.cpassword && (
            <CustomText style={styles.inputError}>
              Confirm password is required.
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
    </KeyboardAvoidingView>
  );
};

export default RegisterStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
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
  },
});
