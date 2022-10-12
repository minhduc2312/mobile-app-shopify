import { useNavigation } from "@react-navigation/native";
import React, { memo } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addQuantity } from "_store";
import { addToCart, useStore } from "_store";


export const handleAddToCart = (state, dispatch, id) => {
    const inCart = state?.cart?.some(item => item.id === id);
    if (inCart) {
        dispatch(addQuantity(id))
        return;
    }
    dispatch(addToCart(id))
}
const ProductItem = ({ item, navigation }) => {
    const [state, dispatch] = useStore()


    return (
        <View>
            <TouchableOpacity style={styles.container}
                onPress={() => navigation.navigate('Product',
                    {
                        screen: 'ProductDetail',
                        params: { ...item }
                    },
                )}
            >
                <>
                    <Image source={{ uri: item?.image?.src }} style={{ width: 150, height: 100, borderRadius: 3 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, paddingLeft: 10, alignItems: 'center' }}>
                        <View style={{ width: 120, flex: 1, height: 100, justifyContent: 'space-around' }}>
                            <Text style={styles.text} >{item.title}</Text>
                            <Text style={styles.text}>Price: {item.variants[0].price} $</Text>
                        </View>

                        <TouchableHighlight underlayColor='#bdcbe7' onPress={() => handleAddToCart(state, dispatch, item.id)} style={{ padding: 10, borderColor: '#4267B2', height: 50, width: 50, borderWidth: 1, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="cart-plus" size={24} color="#4267B2" />
                        </TouchableHighlight>
                    </View>
                </>
            </TouchableOpacity>
        </View >

    )
}
export default memo(ProductItem);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        paddingBottom: 5,
        // backgroundColor: '#333'
        marginTop: 5,
        marginLeft: 5,
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
        paddingRight: 20
    },
    text: {
        fontSize: 18,

    }
});