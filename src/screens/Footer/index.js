import { View, Text, StyleSheet, Touchable, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function index() {
  return (
    <>
      <View style={styles.container}>
        {/* Social Media Icon+ */}
        <View style={styles.icon}>
          <TouchableOpacity>
            <Icon name="twitter" size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="facebook-square"
              size={30}
              style={{ paddingLeft: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="instagram"
              size={30}
              style={{ paddingLeft: 20, paddingRight: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="youtube" size={30} />
          </TouchableOpacity>
        </View>

        {/* Underline */}
        <Image source={require("_assets/images/underline_img.png")} />

        {/* Information */}
        <View style={styles.infor}>
          <Text style={{ fontSize: 19, letterSpacing: 3, paddingBottom: 3 }}>
            support@firegroup.io
          </Text>
          <Text style={{ fontSize: 18, paddingBottom: 3 }}>
            +84 999 888 777
          </Text>
          <Text style={{ fontSize: 18 }}>08:00 - 22:00 - Everyday</Text>
        </View>

        {/* Underline */}
        <Image source={require("_assets/images/underline_img.png")} />

        {/* Navigate link*/}
        <View style={styles.nav}>
          <TouchableOpacity>
            <Text style={styles.navLinkText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.navLinkText,
                { paddingLeft: 50, paddingRight: 50 },
              ]}
            >
              Contact
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navLinkText}>Blog</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Copyright */}
      <View style={styles.copyright}>
        <Text>Copyright &#169; FireGroup All Rights Reserver</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  infor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  nav: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  navLinkText: {
    fontSize: 21,
  },
  copyright: {
    backgroundColor: "rgba(196, 196, 196, 0.1)",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
