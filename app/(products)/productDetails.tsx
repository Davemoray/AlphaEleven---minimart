import { Favorite, Like } from "@/assets/svg";
import Button from "@/components/Button";
import Header from "@/components/Header";
import ProductDescription from "@/components/ProductDescription";
import { productsMap } from "@/data/mockData";
import { useCart } from "@/hooks/stateContext";
import { fonts } from "@/utils/fonts";
import { useRouter } from "expo-router";
import { useState } from "react";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const ProductDetails = () => {
  const { selectedItemId, addToCart, cartItems } = useCart();
  const selectedItem = productsMap[`${selectedItemId}`];
  const [like, setLike] = useState(false);
  const addedToCart = cartItems?.some((item) => item?.id === selectedItemId);
  const router = useRouter();

  return (
    <Header
      hasSearch={false}
      navigationText={"Go back"}
      navigateBack={() => router.back()}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={selectedItem?.image}
          resizeMode="contain"
          style={{ width: "100%", height: "50%" }}
        />
        <TouchableOpacity
          style={styles.favoriteButtonContainer}
          onPress={() => setLike(!like)}
        >
          {like ? <Like /> : <Favorite color={"#000000"} />}
        </TouchableOpacity>

        <Text style={{ fontFamily: fonts.sans.regular, fontSize: 15 }}>
          {selectedItem?.brand} {selectedItem?.specs}
        </Text>
        <Text
          style={{ fontFamily: fonts.sans.bold, fontSize: 30, marginTop: 10 }}
        >
          {`$${selectedItem?.price}`}
        </Text>

        <ProductDescription bulletPoints={selectedItem?.description} />
      </ScrollView>
      <Button
        title={addedToCart ? "Added to cart" : "Add to cart"}
        action={() => addToCart(selectedItem)}
        buttonColor={addedToCart ? "#E2E8F0" : "#60B5FF"}
        buttonTextColor={addedToCart ? "#64748B" : "#FFFFFF"}
      />
    </Header>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: "5%",
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    paddingBottom: "30%",
  },
  favoriteButtonContainer: {
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -10,
    right: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textContainer: {
    marginTop: 10,
  },

  descriptionText: {
    fontFamily: fonts.sans.regular,
    fontSize: 14,
    lineHeight: 24,
    color: "#999999",
  },
});
