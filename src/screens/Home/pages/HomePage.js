import BannerSection from "../components/BannerSection";
import axios from "_plugins/axios";
import Product from "../components/Product";
import { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const getRandom = (max) => Math.floor(Math.random() * max);
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
let amount = 10;
const screen = Dimensions.get("screen");

const HomePage = (props) => {
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [banners, setBanners] = useState("");
  const [categories, setCategories] = useState([]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => {
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    if (!refreshing) {
      axios.get("/admin/api/2022-10/products.json").then((res) => {
        const products = res.data.products;
        setProducts(products);
        setBanners(products[getRandom(products.length)]?.image.src);
        setCategories(
          Array.from(Array(10)).map(
            (_, index) => products[getRandom(products.length)]
          )
        );
      });
    }
    return () => {
      setBanners("");
      setProducts([]);
      setCategories([]);
    };
  }, [refreshing]);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <BannerSection source={banners}></BannerSection>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {Array.from(Array(10)).map((item, index) => (
          <Product
            key={index}
            title={categories[index]?.title}
            image={categories[index]?.image.src}
          />
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: screen.width,
    height: screen.height,
  },
});
export default HomePage;
