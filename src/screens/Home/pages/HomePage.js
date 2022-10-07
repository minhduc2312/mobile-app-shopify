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
import getMultipleRandom from "../../../components/getMultipleRandom/getMultipleRandom";
import ProductSection from "../components/ProductSection";
import Footer from "../../Footer/index";

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

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
      });
    }
  }, [refreshing]);

  const bracelet = [];
  const necklace = [];
  const earring = [];
  const others = [];

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
      <ProductSection title={"Bracelet"} array={bracelet}></ProductSection>

      {/* Earring */}
      <ProductSection title={"Earring"} array={earring}></ProductSection>

      {/* Necklace */}
      <ProductSection title={"Necklace"} array={necklace}></ProductSection>

      {/* Others */}
      <ProductSection title={"Others"} array={others}></ProductSection>

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

// import BannerSection from "../components/BannerSection";
// import axios from "_plugins/axios";
// import Product from "../components/Product";
// import { useCallback, useEffect, useState } from "react";
// import {
//   Dimensions,
//   RefreshControl,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const getRandom = (max) => Math.floor(Math.random() * max);
// const wait = (timeout) => {
//   return new Promise((resolve) => setTimeout(resolve, timeout));
// };
// let amount = 10;
// const screen = Dimensions.get("screen");

// const HomePage = (props) => {
//   const [products, setProducts] = useState([]);
//   const [refreshing, setRefreshing] = useState(false);
//   const [banners, setBanners] = useState("");
//   const [categories, setCategories] = useState([]);

//   const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     wait(500).then(() => {
//       setRefreshing(false);
//     });
//   }, []);

//   useEffect(() => {
//     if (!refreshing) {
//       axios.get("/admin/api/2022-10/products.json").then((res) => {
//         const products = res.data.products;
//         setBanners(products[getRandom(products.length)]?.image.src);
//         setCategories(
//           Array.from(Array(10)).map(
//             (_, index) => products[getRandom(products.length)]
//           )
//         );
//       });
//     }
//     return () => {
//       setBanners("");
//       setProducts([]);
//       setCategories([]);
//     };
//   }, [refreshing]);

//   return (
//     <ScrollView
//       style={styles.container}
//       refreshControl={
//         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//       }
//     >
//       <BannerSection source={banners}></BannerSection>
//       <View
//         style={{
//           flex: 1,
//           flexDirection: "row",
//           justifyContent: "space-around",
//           flexWrap: "wrap",
//         }}
//       >
//         {Array.from(Array(10)).map((item, index) => (
//           <>
//             <Product key={index} product={categories[index]} />
//           </>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     width: screen.width,
//     height: screen.height,
//   },
// });
// export default HomePage;
