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

const LoginStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginPage" component={Login} />
    </Stack.Navigator>
  );
};

const Login = (props) => {
  //  form state, form variable
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      userName: "",
      password: "",
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
        <View style={styles.loginHeader}>
          <CustomText style={styles.loginHeaderText}>Login</CustomText>
        </View>

        {/* Underline */}
        <View style={styles.loginUnderLine}>
          <Image source={require("_assets/images/underline_img.png")} />
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="User name"
              />
            )}
            name="userName"
          />

          {errors.userName && (
            <CustomText style={styles.inputError}>
              User name is required.
            </CustomText>
          )}

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
              />
            )}
            name="password"
          />
          {errors.password && (
            <CustomText style={styles.inputError}>
              Password is required.
            </CustomText>
          )}

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
          <BlackCustomButton
            style={styles.submitButton}
            color="#000000"
            title="Login"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
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
  submitButton: {
    width: 120,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
});
