import React from "react"; 
import { View, Text } from "react-native"; 


export default function TabScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Tab</Text>
        </View>
    );
}


const styles = {
    container: {
        flex: 1, 
        alignItems: "center", 
        backgroundColor: "pink",
    },
    title: {
        fontSize: 30, 
    },
};