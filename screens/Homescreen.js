import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import Stories from "../components/Stories";
import Header from "../components/Header";
import Posts from "../components/Posts";
import DummybottomNav from "../components/DummybottomNav";

const Homescreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <Header />
      <Stories />
      <View style={{ height: 1, backgroundColor: "lightgray" }} />
      <Posts />
      <View style={{ height: 300, flex: 1 }} />
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
