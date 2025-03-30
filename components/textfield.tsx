import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
    title: string,
    placeholder: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function TextField(props: Props) {
    const [value, setValue] = useState("");

    useEffect(() => { 
        setValue(props.value);
    }, [props.value]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
            <TextInput
                placeholder={props.placeholder}
                value={value}
                onChangeText={setValue}
                onBlur={() => props.setValue(value)}
                style={styles.textInput}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    text: {},
    textInput: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    }
});
