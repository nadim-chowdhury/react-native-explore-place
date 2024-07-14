import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function CategoryList() {
  const categoryList = [
    {
      id: 1,
      name: "Gas Station",
      value: "gas_station",
      icon: require("../../assets/gas.png"),
    },
    {
      id: 2,
      name: "Restaurants",
      value: "restaurant",
      icon: require("../../assets/food.png"),
    },
    {
      id: 3,
      name: "Cafe Lasana",
      value: "cafe",
      icon: require("../../assets/cafe.png"),
    },
  ];

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontFamily: "raleway",
          fontWeight: 700,
          marginTop: 12,
        }}
      >
        Select Top Category
      </Text>

      <FlatList
        data={categoryList}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              marginTop: 12,
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
              backgroundColor: "#eee",
              //   width: 120,
              //   height: 120,
              borderRadius: 16,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Image source={item.icon} style={{ width: 48, height: 48 }} />
            <Text style={{ fontWeight: 700 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          alignItems: "center",
          gap: 24,
          justifyContent: "space-between",
          width: "100%",
        }}
      />
    </View>
  );
}
