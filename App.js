import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DummybottomNav from "./components/DummybottomNav";
import Homescreen from "./screens/Homescreen";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Homescreen />
      <DummybottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
