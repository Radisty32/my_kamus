import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput, StyleSheet } from 'react-native';

export default function Index() {
  const [text, setText] = useState(''); // Hook untuk menyimpan nilai text

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0288d1" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerText}>MyKamus</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)} // Mengubah state dengan setText
        value={text}
        placeholder="Masukkan Kata Kunci"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#03a9f4',
    elevation: 1,
  },
  headerText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
