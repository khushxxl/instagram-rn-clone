import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

const DummybottomNav = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
      }}
    >
      <Ionicons name="home-outline" color="white" size={30} style="ios" />
      <Ionicons name="search-outline" color="white" size={30} style="ios" />
      <Ionicons name="play" color="white" size={35} style="ios" />
      <Ionicons name="heart-outline" color="white" size={30} style="ios" />
      <Ionicons name="person-outline" color="white" size={30} style="ios" />
    </SafeAreaView>
  );
};

export default DummybottomNav;

const styles = StyleSheet.create({});
