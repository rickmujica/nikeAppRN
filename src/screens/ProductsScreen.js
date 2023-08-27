import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { productsSlice } from "../store/productsSlice";

const ProductsScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  
    return (
    <FlatList data={products} renderItem={({item}) => (
        <Pressable onPress={() => {
          //update selected product
          dispatch(productsSlice.actions.setSelectedProduct(item.id))
          navigation.navigate("Detalles de Producto")}
          }
          style={styles.itemsContainer}>
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