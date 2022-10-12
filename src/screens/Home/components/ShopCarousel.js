import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  Pressable,
  Linking,
  Alert,
} from "react-native";
import Carousel from "react-native-anchor-carousel";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const { width: windowWidth } = Dimensions.get("window");

const ITEM_WIDTH = 0.7 * windowWidth;
const SEPARATOR_WIDTH = 10;

export default function ShopCarousel({ data }) {
  const carouselRef = useRef(null);
  async function handleInstallNowClick(url) {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  function renderItem({ item, index }) {
    const { image, title, url } = item;
    return (
      <Pressable
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}
      >
        <Image source={{ uri: image?.src }} style={styles.image} />
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      {data.length ? (
        <Carousel
          keyExtractor={(item) => item?.id}
          style={[styles.carousel]}
          ref={carouselRef}
          data={data}
          renderItem={renderItem}
          itemWidth={ITEM_WIDTH}
          separatorWidth={SEPARATOR_WIDTH}
          inActiveScale={1}
          inActiveOpacity={1}
          containerWidth={windowWidth}
        />
      ) : (
        <SkeletonPlaceholder borderRadius={4}>
          <View style={{ width: "100%", height: "100%" }}></View>
        </SkeletonPlaceholder>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  carousel: {
    width: windowWidth,

    flexGrow: 0,
  },
  item: {
    backgroundColor: "white",

    borderRadius: 5,
    borderColor: "#EAECEE",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
