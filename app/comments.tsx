import { StyleSheet, Text, View } from "react-native";

export default function Comments() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Comments</Text>
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
