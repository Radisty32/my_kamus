import React from "react";
import { View, Text, StyleSheet } from "react-native";

type DictionaryCardProps = {
  word?: string;
  meanings?: string[];
};

const DictionaryCard = ({ word, meanings }: DictionaryCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.word}>{word}</Text>
      <View style={styles.meanings}>
        {(meanings ?? []).map(
          (
            meaning,
            index
          ) => (
            <Text key={index} style={styles.meaning}>
              {index + 1}. {meaning}
            </Text>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    margin: 10,
    borderRadius: 8,
    elevation: 3, // shadow effect on Android
    shadowColor: "#000", // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  word: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  meanings: {
    marginTop: 10,
  },
  meaning: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555",
  },
});

export default DictionaryCard;
