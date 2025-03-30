import TextField from "@/components/textfield";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function MissionInfos() {
    const [missionNumber, setMissionNumber] = useState("");
    const [aircraft, setAircraft] = useState("");

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TextField
                title="Mission number"
                placeholder="XX-XXX"
                value={missionNumber}
                setValue={setMissionNumber}
            />
            <TextField
                title="Aircraft"
                placeholder="A400M"
                value={aircraft}
                setValue={setAircraft}
            />
            <TextField
                title="Aircraft"
                placeholder="A400M"
                value={aircraft}
                setValue={setAircraft}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        gap: 10,
        flexDirection: "row",
        flexWrap: "wrap",
    }
});
