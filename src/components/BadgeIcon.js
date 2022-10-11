import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const BadgeIcon = ({ Icon, badge, style, color, backgroundColor, ...props }) => (
    <View style={[styles.container, style]} {...props}>
        <Icon />
        {badge ? (<View style={[styles.badge]}>
            <Text style={{ color, backgroundColor }}>{badge}</Text>
        </View>) : undefined

        }

    </View>
)
export default BadgeIcon;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',


    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -5,
        height: 18,
        width: 18,
        zIndex: 2,
        borderRadius: 50,
        flex: 1,
        color: '#fff',
        backgroundColor: 'tomato',
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',

    }
});