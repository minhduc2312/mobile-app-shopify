import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeletonBanner = () => (
    <SkeletonPlaceholder>
        <View style={styles.image}>
        </View>
    </SkeletonPlaceholder>
)

const BannerSection = ({ source }) => (
    <View style={styles.banner}>
        {source ? (
            <Image style={styles.image} source={{ uri: source }} />
        ) : <SkeletonBanner />}

    </View>
)


export default BannerSection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    banner: {
        width: Dimensions.get('screen').width,
        height: 350,
    },
    image: {
        width: '100%',
        height: '100%'
    }
});