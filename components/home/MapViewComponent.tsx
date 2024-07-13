import { View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "@/context/UserLocationContext";

export default function MapViewComponent() {
  const [mapRegion, setMapRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  return (
    <View style={{ marginTop: 24 }}>
      <Text
        style={{
          fontSize: 24,
          marginBottom: 12,
          fontWeight: 700,
          fontFamily: "raleway",
        }}
      >
        Near By Top Places
      </Text>
      <View
        style={{
          alignItems: "center",
          overflow: "hidden",
          borderRadius: 16,
          // borderColor: "#333",
          // borderWidth: 1,
        }}
      >
        <MapView
          style={{
            width: Dimensions.get("screen").width * 0.95,
            height: Dimensions.get("screen").height * 0.25,
            borderRadius: 16,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker title="User" coordinate={mapRegion} />
        </MapView>
      </View>
    </View>
  );
}
