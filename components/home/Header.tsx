import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchBar} />
      </View>

      <Image source={require("../../assets/user.png")} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  logo: {
    width: 48,
    height: 48,
  },
  searchContainer: {
    flex: 1,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 5,
    paddingLeft: 12,
    paddingRight: 12,
    // width: Dimensions.get("screen").width * 0.6,
  },
  userImage: {
    height: 48,
    width: 48,
    borderRadius: 180,
  },
});
