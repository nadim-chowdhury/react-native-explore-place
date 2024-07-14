import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

export default function PlaceList({ placeList }: any) {
  const navigator = useNavigation();
  const onPlaceClick = (item: any) => {
    navigator.navigate("place-detail", { place: item });
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontFamily: "raleway-bold", marginTop: 10 }}>
        Found {placeList.length} Places
      </Text>

      <FlatList
        data={placeList}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} onPress={() => onPlaceClick(item)}>
            {index % 4 == 0 ? (
              <PlaceItemBig place={item} />
            ) : (
              <PlaceItem place={item} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
