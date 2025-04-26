import { View, Text, Image, StyleSheet } from "react-native";

export default function VerbLayout() {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:30, fontWeight: "600", marginBottom: 30}}>Profile</Text>
      <Image style={styles.img} source={require("@/assets/images/profile.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img : {
    width: 200,
    height : 200,
    marginBottom : 450,
  }
});
