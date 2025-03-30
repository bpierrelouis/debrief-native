import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    text: string,
    active?: boolean,
    indented?: boolean,
    action: () => void
}

export default function SidebarButton(props: Props) {
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...(props.active && styles.buttonActive),
                ...(props.indented && styles.buttonIndented)
            }}
            onPress={props.action}
        >
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    buttonActive: {
        backgroundColor: "#eee"
    },
    buttonIndented: {
        marginLeft: 15
    },
    buttonText: {
        fontSize: 16,
    },
});
