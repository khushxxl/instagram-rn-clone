import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
          }}
          style={{ width: 40, height: 40, marginLeft: 13 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: 100,
          marginTop: 14,
          justifyContent: "space-evenly",
        }}
      >
        <Ionicons name="add-circle" color="white" size={30} style="ios" />
        <Ionicons name="chatbubbles" color="white" size={30} style="ios" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
