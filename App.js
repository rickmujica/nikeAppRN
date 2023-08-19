import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}
      {/* <ProductDetailsScreen /> */}
      {/* <ShoppingCart /> */}
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});
