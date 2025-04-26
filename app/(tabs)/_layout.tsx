import { Tabs } from "expo-router";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#3da7bf",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Welcome",
          tabBarIcon: ({ size }) => (
            <Entypo name="home" color="#fff" size={size} />
          ),
          tabBarLabelStyle: {
            color: "#fff",
          },
        }}
      />
      <Tabs.Screen
        name="verb"
        options={{
          title: "Verb",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="book-open" color="#fff" size={size} />
          ),
          tabBarLabelStyle: {
            color: "#fff",
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" color="#fff" size={size} />
          ),
          tabBarLabelStyle: {
            color: "#fff",
          },
        }}
      />
    </Tabs>
  );
}
