import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BottomTabNavigation from '_navigation';
import Navigation from './screens';


export default function App() {
    return (

        <NavigationContainer style={styles.container}>
            <StatusBar />
                <BottomTabNavigation />
        </NavigationContainer>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});