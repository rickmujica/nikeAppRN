import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
// import cart from '../data/cart'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux';
import { selectDeliveryPrice, selectSubTotal, selectTotal } from '../store/cartSlice';

const checkOut = () => console.warn('Checkout!')

const ShoppingCartTotals = () => {
    const subTotal = useSelector(selectSubTotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);
    return (
        <View style={styles.totalsContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>SubTotal</Text>
                <Text style={styles.text}>{subTotal} US$</Text>
            </View> 
            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>{deliveryFee} US$</Text>
            </View> 
            <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>{total} US$</Text>
            </View> 
        </View>
    );
};

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart.items)
  return (
    <>
    <FlatList
    data={cart}
    renderItem={({item}) => <CartListItem cartItem={item} />}
    ListFooterComponent={ShoppingCartTotals}
    />
    <Pressable onPress={checkOut} style={styles.button}>
        <Text style={styles.buttonText}>Finalizar compra</Text>
    </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
    },
    row: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginVertical: 2,
    },
    text: {
        fontSize: 16,
        color: 'gray',
    },
    textBold: {
        fontSize: 16,
        fontWeight: '700',
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
    
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "500",
      },
})

export default ShoppingCart