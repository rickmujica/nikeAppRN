import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectNumbersOfItems } from "./store/cartSlice";
const Stack = createNativeStackNavigator();

const Navigation = () => {

  const numberOfItems = useSelector(selectNumbersOfItems);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle: {backgroundColor:'white'}}}>
        <Stack.Screen
          name="Productos"
          component={ProductsScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Pressable
                style={{flexDirection: 'row'}}
                onPress={() => navigation.navigate('Carrito')} >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{marginLeft: 5, fontWeight: '500'}}>{numberOfItems}</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Detalles de Producto"
          component={ProductDetailsScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Pressable style={{flexDirection: 'row'}}
                onPress={() => {
                  navigation.goBack();
                  navigation.navigate('Carrito');
                }} >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text style={{marginLeft: 5, fontWeight: '500'}}>{numberOfItems}</Text>
              </Pressable>
            ),
            presentation: "modal"
          })}
        />
        <Stack.Screen name="Carrito" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
