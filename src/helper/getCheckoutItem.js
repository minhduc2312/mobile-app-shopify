import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "_plugins/axios";

export const getCheckoutItem = async () => {
    //get checkout token saved local to request data
    const checkoutToken = await AsyncStorage.getItem('OMDP:checkout_token');
    let checkoutItem;
    if (!checkoutToken) {
        //if not exist, create new checkout token and save on local
        checkoutItem = await axios.post(`/admin/api/2022-10/checkouts.json`)
            .then(res => res.data.checkout).catch(err => console.log(err));
        await AsyncStorage.setItem('OMDP:checkout_token', checkoutItem.token)
    }
    else {
        checkoutItem = await axios.get(`/admin/api/2022-10/checkouts/${checkoutToken}.json`)
            .then(res => res.data.checkout).catch(err => console.log(err));
    }

    return checkoutItem
}