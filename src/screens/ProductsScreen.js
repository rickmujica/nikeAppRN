import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import products from '../data/products.json'

const ProductsScreen = ({navigation}) => {
    return (
    <FlatList data={products} renderItem={({item}) => (
        <Pressable onPress={() => navigation.navigate("Detalles de Producto")} style={styles.itemsContainer}>
         <Image
         source={{uri: item.image}}
         style={styles.image}
         />
        </Pressable> 
       )}
       numColumns={2}
       />
)}

const styles = StyleSheet.create({
    itemsContainer: {
      width: '50%',
      padding: 1,
    },
    image: { width: "100%", aspectRatio: 1 },
  });

export default ProductsScreen;