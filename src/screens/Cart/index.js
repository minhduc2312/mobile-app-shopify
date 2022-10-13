import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList, Image } from "react-native";
import CartItem from "./components/CartItem";
import { useStore } from "_store";

const CartScreen = ({ navigation }) => {
  const [state, dispatch] = useStore();
  const { cart, products } = state;
  const getTotalPrice = products.reduce((prev, curr) => {
    const item = cart.find((item) => item.id === curr.id);
    if (item) {
      return prev + curr.variants[0].price * item.quantity;
    }
    return prev;
  }, 0);
  return cart.length ? (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "#fff",
          paddingHorizontal: 5,
          paddingVertical: 10,
        }}
      >
        {/* get quantity item in cart */}
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          Items (
          {cart.reduce((prev, curr) => {
            return prev + curr.quantity;
          }, 0)}
          )
        </Text>
        {/* get total price */}
        <Text style={{ fontSize: 16, fontWeight: "500" }}>TOTAL: $ {getTotalPrice}</Text>
      </View>
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          width: Dimensions.get("screen").width,
        }}
        data={cart}
        renderItem={({ item }) => (
          <CartItem key={item.id} items={products.find((product) => product.id == item.id)} quantity={item.quantity} />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={{ paddingHorizontal: 10, width: "100%" }}>
        <View style={{ width: "100%", borderWidth: 0.8, borderRadius: 2 }}>
          <Text style={{ fontWeight: "600", fontSize: 18, backgroundColor: "#c4c4c4", paddingHorizontal: 10 }}>ORDER DETAILS</Text>
          <View style={{ paddingHorizontal: 10 }}>
            <View style={styles.orderDetail}>
              <Text>Cart total</Text>
              <Text>$ {getTotalPrice}</Text>
            </View>
            <View style={styles.orderDetail}>
              <Text>Discount</Text>
              <Text>$ 0,00</Text>
            </View>
            <View style={styles.orderDetail}>
              <Text>Total Tax</Text>
              <Text>$ 0,00</Text>
            </View>
            <View style={[styles.orderDetail, { borderTopWidth: 0.8, paddingVertical: 10 }]}>
              <Text>Total Payment</Text>
              <Text>$ {getTotalPrice}</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: Dimensions.get("screen").width - 20,
          alignItems: "center",
          marginVertical: 10,
          paddingVertical: 10,
          backgroundColor: "#000",
        }}
        onPress={() => navigation.navigate("CheckOutScreen")}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>CHECK OUT</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.emptyCart}>
      <Image source={require("_assets/images/empty-cart.png")} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductHome")}>
        <Text style={{ color: "#189AB4", fontSize: 18, fontWeight: "600" }}>Go to shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: Dimensions.get("screen").width,
  },
  emptyCart: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 150,
  },
  button: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 20,
    borderColor: "#189AB4",
  },
  text: {
    fontSize: 16,
  },
  orderDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
