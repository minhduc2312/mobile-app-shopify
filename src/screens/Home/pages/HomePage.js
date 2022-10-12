import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  RefreshControl,
} from "react-native";
import ShopCarousel from "../components/ShopCarousel";
import axios from "_plugins/axios";
import getMultipleRandom from "../../../components/getMultipleRandom/getMultipleRandom";
import ProductSection from "../components/ProductSection";
import Footer from "../../Footer/index";
import { useStore } from "_store";
import { fetchProducts } from "_store";


const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useStore();


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => {
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    if (!refreshing) {
      axios.get("/admin/api/2022-10/products.json").then((res) => {
        setProducts(() => res.data.products);
        setData(getMultipleRandom(res.data.products, 5));
        dispatch(fetchProducts(res.data.products))
      });
    }
  }, [refreshing]);

  const bracelet = useMemo(() => [], []);
  const necklace = useMemo(() => [], []);
  const earring = useMemo(() => [], []);
  const others = useMemo(() => [], []);

  products.map((item) => {
    if (item.product_type.trim().toLowerCase() == "bracelet") {
      bracelet.push(item);
    } else if (item.product_type.trim().toLowerCase() == "necklace") {
      necklace.push(item);
    } else if (item.product_type.trim().toLowerCase() == "earrings") {
      earring.push(item);
    } else {
      others.push(item);
    }
  });

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/* Banner Carousel */}
      <ShopCarousel data={data} />

      {/* Bracelet */}
      {bracelet.length ?
        <ProductSection title={"Bracelet"} array={bracelet}></ProductSection> : null
      }

      {/* Earring */}
      {earring.length ?
        <ProductSection title={"Earring"} array={earring}></ProductSection> : null
      }

      {/* Necklace */}

      {necklace.length ?
        <ProductSection title={"Necklace"} array={necklace}></ProductSection> : null
      }

      {/* Others */}
      {others.length ?
        <ProductSection title={"Others"} array={others}></ProductSection> : null
      }

      {/* Footer */}
      <Footer />
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
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: 20,
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
