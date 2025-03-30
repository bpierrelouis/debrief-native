import { ScrollView, StyleSheet, Text, View } from "react-native";
import NavLinks from "./sidebar-navlinks";

export default function Sidebar() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <NavLinks />
                <Text style={styles.title}>Legs</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderColor: "#ddd"
    },
    scrollView: {
        gap: 3,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 10,
    }
});
