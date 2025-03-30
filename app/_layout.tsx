import Sidebar from "@/components/sidebar/sidebar";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Sidebar />
                <Stack screenOptions={{
                    headerShown: false,
                    contentStyle: styles.content
                }} />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        height: "100%",
    },
    content: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
