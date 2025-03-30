import Sidebar from "@/components/sidebar";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Sidebar />
                <SafeAreaView style={styles.content}>
                    <Stack screenOptions={{ headerShown: false }} />
                </SafeAreaView>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    content: {
        flex: 1
    },
});
