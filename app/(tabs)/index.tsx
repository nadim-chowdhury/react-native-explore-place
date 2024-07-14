import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/home/Header";
import MapView from "@/components/home/MapViewComponent";
import CategoryList from "@/components/home/CategoryList";
import GlobalApi from "@/services/GlobalApi";
import { useEffect, useState } from "react";
import PlaceList from "@/components/home/PlaceList";

export default function HomeScreen() {
  const [placeList, setPlaceList] = useState([]);

  const nearBySearchPlace = () => {
    GlobalApi.nearByPlace().then((res) => {
      console.log(res.data.results);
      setPlaceList(res.data.results);
    });
  };

  useEffect(() => {
    nearBySearchPlace();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MapView />
      <CategoryList />
      {placeList && <PlaceList placeList={placeList} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingTop: 32 },
});
