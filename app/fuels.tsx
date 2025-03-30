import { StyleSheet, Text, View } from "react-native";

export default function Fuels() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Fuels</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 16,
    },
});
