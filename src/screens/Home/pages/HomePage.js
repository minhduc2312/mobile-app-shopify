import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  RefreshControl,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ShopCarousel from "../components/ShopCarousel";
import axios from "_plugins/axios";
import getMultipleRandom from "../../../components/getMultipleRandom/getMultipleRandomItem";
import ProductSection from "../components/ProductSection";
import Footer from "../../Footer/index";

//get random element in array product to show item test
const getRandom = (max) => (
  Math.floor(Math.random() * max)
)

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const screen = Dimensions.get('screen')
const HomePage = ({ }) => {
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [banners, setBanners] = useState("");
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  //action refresh screen when pull down screen
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => {
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    if (!refreshing) {
      axios.get('/admin/api/2022-10/products.json').then(res => {
        const products = res.data.products
        setProducts(products);
        setBanners(products[getRandom(products.length)]?.image.src);
        setCategories(Array.from(Array(10)).map((_, index) => (products[getRandom(products.length)])));
      });
    }
    return () => {
      setBanners("");
      setProducts([]);
      setCategories([])
    }
  }, [refreshing])


  return (
    <ScrollView style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />}
    >
      <SafeAreaView>
        <BannerSection source={banners}></BannerSection>
        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          {Array.from(Array(10)).map((item, index) => (
            <Product product={categories[index]} key={index} onPress={() => navigation.navigate('ProductStack', {
              screen: 'ProductDetail', params: {
                product: { ...categories[index] }
              }
            },)} />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  image: {
    width: screen.width,
    height: screen.height
  }
});