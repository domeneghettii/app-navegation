import React from "react"; // Importa a biblioteca React
import { View, Text } from "react-native"; // Importa os componentes View e Text da biblioteca react-native

// Define o componente funcional Tab2
export default function Tab2() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Tab 2</Text>
        </View>
    );
}


const styles = {
    container: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "blue", 
    },
    title: {
        fontSize: 30, 
    },
};