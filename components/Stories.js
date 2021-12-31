import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

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

const Stories = () => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <FlatList
        horizontal
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                margin: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={{}}>
                <Image
                  source={{ uri: `${item.profileImg}` }}
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 100,
                    borderColor: "red",
                    borderWidth: 4,
                  }}
                />
              </View>

              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Stories;
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "600",
    marginTop: 10,
  },
});
