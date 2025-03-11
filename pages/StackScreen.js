import React from "react"; // Importa a biblioteca React
import { View, Button, StyleSheet } from "react-native"; // Importa componentes e funções do React Native

// Define o componente funcional StackScreen, que recebe a prop navigation
export default function StackScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button title="Olá, clique aqui embaixo para continuar!" onPress={() => navigation.navigate("Stack 2")} />
        </View>
    );
}

// Define os estilos para os componentes
const styles = StyleSheet.create({
    container: {
        flex: 1, // Faz com que a View ocupe todo o espaço disponível
        justifyContent: "center", // Centraliza os filhos verticalmente
        alignItems: "center", // Centraliza os filhos horizontalmente
        backgroundColor: "purple", // Define a cor de fundo como azul claro
    },
});