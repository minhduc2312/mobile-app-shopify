import { useEffect, useState } from "react";
import axios from '_plugins/axios'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    Image,
    Dimensions,
    StatusBar
} from "react-native";
import BannerSection from "./components/BannerSection";
const screen = Dimensions.get('screen');

const Home = ({ navigation, onclick }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/admin/api/2022-10/products.json').then(res => setProducts(res.data.products))
        return (() => {
            setProducts([])
        })
    }, [])
    useEffect(() => {
    }, [products])

    return (
        <ScrollView style={styles.container}>
            <BannerSection source={products[0]?.image.src} />
        </ScrollView>
    )


}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    image: {
        width: screen.width,
        height: screen.height
    }
});