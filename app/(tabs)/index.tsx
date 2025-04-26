import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import fetchDictionaryData from "@/api/api_kamus";
import DictionaryCard from "@/components/DictionarCard";

export default function Index() {
  const [text, setText] = useState(""); // Hook untuk menyimpan nilai text
  const [sendRequest, setSendRequest] = useState(""); // Untuk trigger request
  const [dictionaryData, setDictionaryData] = useState<any>(null); // Data hasil dari API

  useEffect(() => {
    const fetchData = async () => {
      if (sendRequest) {
        const result = await fetchDictionaryData({ word: sendRequest });
        console.log(result); // Debug: Lihat hasil dari API
        setDictionaryData(result); // Simpan hasil API ke dalam state
      }
    };
    if (sendRequest) {
      fetchData(); // Panggil fetchData jika sendRequest berubah
    }
  }, [sendRequest]); // Dependency array agar useEffect hanya berjalan ketika sendRequest berubah

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3da7bf" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerText}>MyKamus</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)} // Mengubah state dengan setText
        value={text}
        placeholder="Masukkan Kata Kunci"
        onSubmitEditing={() => setSendRequest(text)} // Trigger API call saat tekan enter
      />

      {dictionaryData && dictionaryData.length > 0 ? (
        <ScrollView style={styles.resultContainer}>
          {dictionaryData.map((entry: any, index: number) => (
            <DictionaryCard
              key={index}
              word={entry.word}
              meanings={entry.meanings?.map(
                (meaning: any) => meaning.definitions[0].definition
              )}
            />
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.noResultText}>Data tidak ditemukan</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: "#3da7bf",
    elevation: 1,
  },
  headerText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  resultContainer: {
    marginTop: 20,
  },
  noResultText: {
    textAlign: "center",
    fontSize: 18,
    color: "#888",
    marginTop: 20,
  },
});
