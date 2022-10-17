import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { removeFromCart } from "_store";
import { subQuantity } from "_store";
import { addQuantity } from "_store";
import { useStore } from "_store";

const CartItem = ({ items, quantity, variantId }) => {
  const [state, dispatch] = useStore();
  const variantItem = items.variants.find(variant => variant.id == variantId)
  const handleIncrease = (id) => {
    dispatch(addQuantity(id));
  };
  const handleDecrease = (id) => {
    if (quantity > 1) {
      dispatch(subQuantity(id));
    } else {
      dispatch(removeFromCart(id));
    }
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: items?.image?.src }} style={styles.image} />
      <View style={styles.info}>
        <View>
          <Text>{items?.title}</Text>
          <Text style={{ fontWeight: "bold" }}>
            $ {variantItem.price}
          </Text>
          <Text >
            {variantItem.title == 'Default Title' ? null : `Type: ${variantItem.title}`}
          </Text>
        </View>
        <View style={styles.quantity}>
          <TouchableOpacity
            style={[styles.quantityButton, styles.decreaseButton]}
            onPress={() => handleDecrease(variantItem.id)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text>{quantity}</Text>

          <TouchableOpacity
            style={[styles.quantityButton, styles.increaseButton]}
            onPress={() => handleIncrease(variantItem.id)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "100%",
    marginBottom: 5,
    borderBottomWidth: 0.8,
    borderBottomColor: "#c4c4c4",
    paddingBottom: 5,
  },
  image: {
    width: 150,
    height: 100,
  },
  info: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderRadius: 2,
    width: 120,
    height: 35,
  },
  quantityButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    height: "100%",
  },
  increaseButton: {
    borderLeftWidth: 0.5,
  },
  decreaseButton: {
    borderRightWidth: 0.5,
  },
  buttonText: {
    fontSize: 18,
  },
});
