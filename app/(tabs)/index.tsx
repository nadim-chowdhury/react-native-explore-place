import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/home/Header";
import MapView from "@/components/home/MapViewComponent";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MapView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingTop: 32 },
});
