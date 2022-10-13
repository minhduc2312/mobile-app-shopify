import React from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CustomText from "../../../components/customText/CustomText";
import Icon from "react-native-vector-icons/Entypo";

const CheckOutScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      contentContainerStyle={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={styles.innerContainer}>
            {/* Above section : Header + Methods */}
            <View style={styles.above}>
              {/* Header */}
              <View style={styles.header}>
                <CustomText style={styles.headerText}>CHECKOUT</CustomText>
                <Image source={require("_assets/images/underline_img.png")}></Image>
              </View>

              {/* SHIPPING ADDRESS */}
              <View style={styles.contentSection}>
                <View style={styles.contentSection_text}>
                  <CustomText style={styles.contentSection_text_innerText}>Shipping Address</CustomText>
                </View>
                <View style={styles.contentSection_content}></View>
                <View>
                  <TouchableOpacity
                    style={styles.contentSection_btn}
                    onPress={() => {
                      navigation.navigate("PlaceOrderScreen");
                    }}
                  >
                    <CustomText>Add shipping address</CustomText>
                    <Icon name="plus" color={"#000"} size={20}></Icon>
                  </TouchableOpacity>
                </View>
              </View>

              {/* SHIPPING METHOD */}
              <View style={styles.contentSection}>
                <View style={styles.contentSection_text}>
                  <CustomText style={styles.contentSection_text_innerText}>Shipping Method</CustomText>
                </View>
                <View style={styles.contentSection_content}></View>
                <View>
                  <TouchableOpacity style={styles.contentSection_btn}>
                    <CustomText>Pickup at store</CustomText>
                    <View style={{ flexDirection: "row" }}>
                      <CustomText style={{ marginRight: 20 }}>FREE</CustomText>
                      <Icon name="chevron-thin-down" color={"#000"} size={20}></Icon>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/* PAYMENT METHOD */}
              <View style={styles.contentSection}>
                <View style={styles.contentSection_text}>
                  <CustomText style={styles.contentSection_text_innerText}>Payment Method</CustomText>
                </View>
                <View style={styles.contentSection_content}></View>
                <View>
                  <TouchableOpacity style={styles.contentSection_btn}>
                    <CustomText>Select payment method</CustomText>
                    <Icon name="chevron-thin-down" color={"#000"} size={20}></Icon>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* Under Section: Total + Button */}
            <View style={styles.below}></View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  // container
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    // backgroundColor: "tomato",
  },
  // Header styles
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  headerText: {
    fontSize: 18,
    lineHeight: 40,
    letterSpacing: 4,
    marginBottom: 5,
  },
  // Content Section
  contentSection: {
    paddingTop: 25,
  },
  contentSection_text: {},
  contentSection_text_innerText: {
    color: "#888888",
    fontSize: 18,
    letterSpacing: 1,
    height: 50,
  },
  contentSection_content: {},
  contentSection_btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 13,
    paddingHorizontal: 20,
    backgroundColor: "#F9F9F9",
    borderRadius: 44,
  },
});
