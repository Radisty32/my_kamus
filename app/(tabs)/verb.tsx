import { View, Text, StyleSheet } from "react-native";

export default function VerbLayout() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verb</Text>
            <Text style={styles.description}>
                "Verb" adalah kata kerja dalam bahasa Indonesia. Verb berfungsi untuk menunjukkan aksi, 
                keadaan, atau proses yang dilakukan oleh subjek dalam sebuah kalimat.
            </Text>
            <Text style={styles.example}>
                Contoh verb: makan, tidur, bermain, menulis.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    example: {
        fontSize: 16,
        fontStyle: "italic",
    },
});
