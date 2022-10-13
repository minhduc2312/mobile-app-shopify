import React from "react";
import { Image, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, TouchableWithoutFeedback, View, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
// Components
import CustomText from "../../../components/customText/CustomText";
import BlackCustomButton from "../../../components/blackCustomButton/BlackCustomButton";
const PlaceOrderScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <KeyboardAvoidingView
      contentContainerStyle={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.innerContainer}>
            {/* header */}
            <View style={styles.header}>
              <CustomText style={styles.headerText}>ADD SHIPPING ADDRESS</CustomText>
              <Image styles={styles.headerImg} source={require("_assets/images/underline_img.png")}></Image>
            </View>
            {/* Add shipping address form */}
            <View style={styles.formContainer}>
              {/* First Name and Last Name */}
              <View style={styles.row}>
                <View style={styles.separateTextInputAndError}>
                  {/* First Name */}
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        style={[styles.inputInRow]}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="First name"
                      />
                    )}
                    name="firstName"
                  />
                  {errors.firstName && <CustomText style={styles.inputError}>First name is required.</CustomText>}
                </View>
                <View style={styles.separateTextInputAndError}>
                  {/* Last Name */}
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput style={styles.inputInRow} onBlur={onBlur} onChangeText={onChange} value={value} placeholder="Last name" />
                    )}
                    name="lastName"
                  />
                  {errors.lastName && <CustomText style={styles.inputError}>Last name is required.</CustomText>}
                </View>
              </View>
              {/* Address */}
              <View>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} placeholder="Address" />
                  )}
                  name="address"
                />
                {errors.address && <CustomText style={styles.inputError}>Address is required.</CustomText>}
              </View>
              {/* City */}
              <View>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} placeholder="City" />
                  )}
                  name="city"
                />
                {errors.city && <CustomText style={styles.inputError}>City is required.</CustomText>}
              </View>
              {/* State and ZipCode */}
              <View style={styles.row}>
                {/* State */}
                <View style={styles.separateTextInputAndError}>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput style={[styles.inputInRow]} onBlur={onBlur} onChangeText={onChange} value={value} placeholder="State" />
                    )}
                    name="state"
                  />
                  {errors.state && <CustomText style={styles.inputError}>State is required.</CustomText>}
                </View>

                {/* ZIP code */}
                <View style={styles.separateTextInputAndError}>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput style={styles.inputInRow} onBlur={onBlur} onChangeText={onChange} value={value} placeholder="ZIP code" />
                    )}
                    name="zipCode"
                  />
                  {errors.zipCode && <CustomText style={styles.inputError}>Zip code is required.</CustomText>}
                </View>
              </View>
              {/* phoneNumber */}
              <View>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} placeholder="Phone number" />
                  )}
                  name="phoneNumber"
                />
                {errors.phoneNumber && <CustomText style={styles.inputError}>Phone number is required.</CustomText>}
              </View>
            </View>
            {/* Submit Button */}
            <View style={styles.formSubmitButton}>
              <BlackCustomButton style={styles.submitButton} color="#000000" title="ADD PLACE" onPress={handleSubmit(onSubmit)} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PlaceOrderScreen;

const styles = StyleSheet.create({
  // Row : 2 TextInput in 1 line
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  separateTextInputAndError: {
    flex: 1,
    flexDirection: "column",
  },
  inputInRow: {
    height: 50,
    width: "90%",
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#D4D4D4",
    marginBottom: 15,
  },
  // Whole container
  container: {
    flex: 1,
  },
  innerContainer: {
    // flex: 1,
    padding: 20,
    justifyContent: "space-between",
    height: "100%",
  },
  // Header styles
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    lineHeight: 40,
    letterSpacing: 4,
    marginBottom: 5,
  },
  headerImg: {},
  // Add Shipping Address Form
  formContainer: {
    marginTop: 20,
    justifyContent: "space-between",
  },
  input: {
    height: 50,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#D4D4D4",
    marginBottom: 15,
  },
  formSubmitButton: {},
  submitButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 45,
  },
  inputError: {
    color: "#cc0000",
    marginBottom: 10,
  },
});
