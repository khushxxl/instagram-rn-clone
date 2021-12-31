import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const profiles = [
  {
    name: "Khushaal",
    profileImg:
      "https://lh3.googleusercontent.com/ogw/ADea4I6rb6HTAQqVsHoajMVjnL8N6zbA-cNLl7PSOBkhNcc=s192-c-mo",
  },
  {
    name: "Elon Musk",
    profileImg:
      "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
  },
  {
    name: "Bill Gates",
    profileImg:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",
  },
  {
    name: "Khushaal",
    profileImg:
      "https://lh3.googleusercontent.com/ogw/ADea4I6rb6HTAQqVsHoajMVjnL8N6zbA-cNLl7PSOBkhNcc=s192-c-mo",
  },
  {
    name: "Elon Musk",
    profileImg:
      "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
  },
  {
    name: "Bill Gates",
    profileImg:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",
  },
];

const Posts = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{ marginTop: 30 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={{ uri: `${item.profileImg}` }}
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                      marginLeft: 10,
                    }}
                  />
                  <Text style={{ color: "white", marginLeft: 15 }}>
                    {item.name}
                  </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Ionicons name="" style="" color="white" style={40} />
                </View>
              </View>
              <Image
                source={{ uri: `${item.profileImg}` }}
                style={{
                  width: 370,
                  height: 400,
                  marginTop: 10,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    marginLeft: 10,
                  }}
                >
                  <Ionicons name="heart-outline" color="white" size={30} />
                  <Ionicons
                    name="chatbubble-outline"
                    color="white"
                    size={30}
                    style={{ marginLeft: 10 }}
                  />
                  <Ionicons
                    name="paper-plane-outline"
                    color="white"
                    size={30}
                    style={{ marginLeft: 10, marginTop: 2 }}
                  />
                </View>
                <View>
                  <Ionicons
                    name="bookmark-outline"
                    color="white"
                    size={30}
                    style={{ marginLeft: 10, marginTop: 2 }}
                  />
                </View>
              </View>
              <Text
                style={{
                  color: "white",
                  marginBottom: 30,
                  marginLeft: 10,
                  marginTop: 10,
                }}
              >
                Comments..
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
