import Button from "@/components/Button";
import CartItem from "@/components/CartItem";
import Header from "@/components/Header";
import { useCart } from "@/hooks/stateContext";
import { fonts } from "@/utils/fonts";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Cart = () => {
  const router = useRouter();

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getCartTotal,
  } = useCart();

  const total = getCartTotal() + (cartItems?.length > 0 ? 10 : 0);

  return (
    <Header
      hasSearch={false}
      navigationText={"Your Cart"}
      navigateBack={() => router.back()}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cartItems?.map((item, index) => (
          <CartItem
            key={item.id}
            item={item}
            quantity={item?.quantity ?? 1}
            onIncrease={() => increaseQuantity(item?.id)}
            onDecrease={() => decreaseQuantity(item?.id)}
            onRemove={() => removeFromCart(item?.id)}
          />
        ))}

        <Text
          style={{ fontFamily: fonts.sans.bold, fontSize: 17, marginTop: 20 }}
        >
          Order Info
        </Text>

        {/* price summary */}

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles?.itemBreakdown}>Subtotal</Text>
          <Text style={styles?.itemBreakdown}>{`$ ${getCartTotal()}`}</Text>
        </View>

        {cartItems?.length > 0 && (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles?.itemBreakdown}>Shipping</Text>
            <Text style={styles?.itemBreakdown}>{`$ 10`}</Text>
          </View>
        )}

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles?.itemBreakdown}>Total</Text>
          <Text
            style={{ fontFamily: fonts.sans.bold, marginTop: 10, fontSize: 13 }}
          >{`$ ${total}`}</Text>
        </View>
      </ScrollView>
      <Button title={`Checkout ($${total})`} action={() => {}} />
    </Header>
  );
};

export default Cart;
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: "5%",
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    paddingBottom: "60%",
  },

  cartItem: {
    flexDirection: "row",
    width: "100%",
    height: "30%",
    backgroundColor: "#F6F5F8",
    borderRadius: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  cartButton: {
    borderRadius: 32,
    paddingHorizontal: 5,
    paddingVertical: 5.5,
    borderColor: "#E2E8F0",
    borderWidth: 1,
  },
  itemBreakdown: {
    marginTop: 10,
    fontFamily: fonts.sans.regular,
    fontSize: 13,
  },
});
