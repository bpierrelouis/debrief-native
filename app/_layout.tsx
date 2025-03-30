import Sidebar from "@/components/sidebar";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Sidebar />
                <View style={styles.content}>
                    <Stack screenOptions={{ headerShown: false }} />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        height: "100%"
    },
    content: {
        flex: 1
    },
});
