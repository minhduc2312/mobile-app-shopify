import React from "react";
import getMultipleRandom from "../../../components/getMultipleRandom/getMultipleRandom";
import Icon from "react-native-vector-icons/AntDesign";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Product from "../../../components/product/Product";
import { useNavigation } from "@react-navigation/native";

export default function ProductSection({ title: title, array: productArray }) {
  const navigation = useNavigation();

  return (
    <View style={styles.shopCollection}>
      <View style={styles.shopCollectionHeader}>
        <Text style={styles.shopCollectionHeaderText}>{title}</Text>
        <Image
          style={styles.shopCollectionHeaderUnderline}
          source={require("_assets/images/header-line.png")}
        />
      </View>
      <View style={styles.shopCollectionItem}>
        {getMultipleRandom(productArray, 5).map((item, index) => (
          <Product key={index} product={productArray[index]}></Product>
        ))}
        <TouchableOpacity onPress={() => navigation.navigate(title)}>
          <View style={styles.viewMoreProductBtn}>
            <Text style={styles.viewMoreProductBtnText}>View More</Text>
            <Icon name="arrowright" size={25} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // shopCollection
  shopCollection: {
    flex: 1,
  },
  shopCollectionHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  shopCollectionHeaderText: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 40,
    letterSpacing: 4,
  },
  shopCollectionHeaderUnderline: {},
  shopCollectionItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: 40,
  },

  viewMoreProductBtn: {
    backgroundColor: "#e4e6e9",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    height: 200,
    borderRadius: 10,
    shadowRadius: 100,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  viewMoreProductBtnText: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 40,
    letterSpacing: 4,
  },
});
