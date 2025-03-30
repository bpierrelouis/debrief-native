import { StyleSheet, Text, View } from "react-native";

export default function Trainings() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Trainings</Text>
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
