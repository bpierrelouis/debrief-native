import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavLinks from "./sidebar-navlinks";

export default function Sidebar() {
    return (
        <SafeAreaView style={styles.sidebar}>
            <NavLinks />
            <Text style={styles.title}>Legs</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sidebar: {
        width: 200,
        backgroundColor: "#ddd",
        height: "100%",
        paddingVertical: 10,
        paddingHorizontal: 5,
        gap: 3,
        overflowY: "auto",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 10,
    }
});
