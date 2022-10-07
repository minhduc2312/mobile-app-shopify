import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeletonImage = () => (
  <SkeletonPlaceholder>
    <View
      style={{
        width: 180,
        height: 200,
        // paddingHorizontal: 5,
        marginLeft: 10,
        borderRadius: 10,
        shadowRadius: 100,
      }}
    ></View>
  </SkeletonPlaceholder>
);

const Product = ({ product }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("ProductStack", {
      screen: "ProductDetail",
      params: {
        ...product,
      },
    });
  };
  return (
    <View style={styles.container}>
      {product?.image.src ? (
        <TouchableOpacity
          style={{ width: "100%", height: "100%" }}
          onPress={onPress}
        >
          <Image style={styles.image} source={{ uri: product?.image.src }} />
        </TouchableOpacity>
      ) : (
        <SkeletonImage />
      )}
      <Text>{product?.title}</Text>
    </View>
  );
};
export default Product;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    alignItems: "center",
    width: 180,
    height: 200,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    shadowRadius: 100,
  },
});
