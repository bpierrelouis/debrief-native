import { StyleSheet, Text, View } from "react-native";

export default function DepartureArrival() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Departure / Arrival</Text>
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
