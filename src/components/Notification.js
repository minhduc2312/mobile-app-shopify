import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import BadgeIcon from "./BadgeIcon";
import BellIcon from 'react-native-vector-icons/Fontisto'
import { useStore } from "_store";

const Notification = (props) => {
    const [state] = useStore();
    const { notification } = state;
    return (
        <TouchableOpacity>
            <BadgeIcon Icon={() => <BellIcon name="bell" size={24} />}
                style={{ marginRight: 15 }}
                badge={notification.length} color='#fff'
            />
        </TouchableOpacity>
    )
}
export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});