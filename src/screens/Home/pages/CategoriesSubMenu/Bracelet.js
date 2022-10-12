import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import ProductItem from "_screens/Product/components/ProductItem";
import { useStore } from "_store";

const BraceletScreen = ({ }) => {
  const [state] = useStore();
  const { products } = state
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          width: Dimensions.get('screen').width
        }}
        data={products.filter(product => product.product_type == 'Bracelet')}
        renderItem={({ item }) => (
          item?.image?.src ? <ProductItem item={item} navigation={navigation} /> : null
        )}
        keyExtractor={item => item.id}
        initialNumToRender={6}
      />
    </View>
  );
}
export default BraceletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
