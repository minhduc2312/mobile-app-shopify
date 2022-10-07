import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ShopCarousel from "../components/ShopCarousel";
import axios from "_plugins/axios";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { FlatGrid } from "react-native-super-grid";
import Product from "../../../components/product/Product";
import getMultipleRandom from "../../../components/getMultipleRandom/getMultipleRandom";

const getRandom = (max) => Math.floor(Math.random() * max);

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [braceletCategory, setBraceletCategory] = useState([]);
  const [necklaceCategory, setNecklaceCategory] = useState([]);
  const [earringsCategory, setEarringsCategory] = useState([]);
  const [othersCategory, setOthersCategory] = useState([]);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  // const onRefresh = useCallback(() => {
  //   setRefreshing(true);
  //   wait(500).then(() => {
  //     setRefreshing(false);
  //   });
  // }, []);
  useEffect(() => {
    axios.get("/admin/api/2022-10/products.json").then((res) => {
      setProducts(() => res.data.products);
      setData(getMultipleRandom(res.data.products, 5));
    });
  }, []);

  const bracelet = [];
  const necklace = [];
  const earrings = [];
  const others = [];

  products.map((item) => {
    if (item.product_type.trim().toLowerCase() == "bracelet") {
      bracelet.push(item);
    } else if (item.product_type.trim().toLowerCase() == "necklace") {
      necklace.push(item);
    } else if (item.product_type.trim().toLowerCase() == "earrings") {
      earrings.push(item);
    } else {
      others.push(item);
    }
  });

  return (
    <ScrollView style={styles.container}>
      {/* Redirect Button */}
      <View style={styles.navigateBtnContainer}>
        <TouchableOpacity
          style={styles.navigateBtn}
          onPress={() => {
            navigation.navigate("Shoes");
          }}
        >
          <Text style={styles.navigateBtnText}>Shoes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigateBtn}
          onPress={() => {
            navigation.navigate("Clothing");
          }}
        >
          <Text style={styles.navigateBtnText}>Clothing</Text>
        </TouchableOpacity>
      </View>

      {/* Banner Carousel */}
      <ShopCarousel data={data} />

      {/* Bracelet */}
      <View style={styles.shopCollection}>
        <View style={styles.shopCollectionHeader}>
          <Text style={styles.shopCollectionHeaderText}>Bracelet</Text>
          <Image
            style={styles.shopCollectionHeaderUnderline}
            source={require("_assets/images/header-line.png")}
          />
        </View>
        <View style={styles.shopCollectionItem}>
          {getMultipleRandom(bracelet, 5).map((item, index) => (
            <Product
              key={index}
              title={bracelet[index]?.title}
              image={bracelet[index]?.image.src}
            ></Product>
          ))}
        </View>
      </View>

      {/* Earrings */}
      <View style={styles.shopCollection}>
        <View style={styles.shopCollectionHeader}>
          <Text style={styles.shopCollectionHeaderText}>Earrings</Text>
          <Image
            style={styles.shopCollectionHeaderUnderline}
            source={require("_assets/images/header-line.png")}
          />
        </View>
        <View style={styles.shopCollectionItem}></View>
      </View>

      {/* Necklace */}
      <View style={styles.shopCollection}>
        <View style={styles.shopCollectionHeader}>
          <Text style={styles.shopCollectionHeaderText}>Necklace</Text>
          <Image
            style={styles.shopCollectionHeaderUnderline}
            source={require("_assets/images/header-line.png")}
          />
        </View>
        <View style={styles.shopCollectionItem}></View>
      </View>

      {/* Others */}
      <View style={styles.shopCollection}>
        <View style={styles.shopCollectionHeader}>
          <Text style={styles.shopCollectionHeaderText}>Others</Text>
          <Image
            style={styles.shopCollectionHeaderUnderline}
            source={require("_assets/images/header-line.png")}
          />
        </View>
        <View style={styles.shopCollectionItem}></View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  //Redirect Button
  navigateBtnContainer: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
    marginBottom: 10,
  },
  navigateBtn: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 15,
    backgroundColor: "#000",
    borderRadius: 50,
  },
  navigateBtnText: {
    color: "#fff",
  },

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
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
