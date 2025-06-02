import { Add, Delete, Remove } from "@/assets/svg";
import { ProductType } from "@/type/productType";
import { fonts } from "@/utils/fonts";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CartItemProps {
  item: ProductType;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CartItem = ({ item, quantity, onIncrease, onDecrease, onRemove }: CartItemProps) => {

  return (
    <View style={styles.cartItem}>
      <Image
        source={item?.image}
        resizeMode="cover"
        style={{ width: "25%", height: "50%", backgroundColor: "#000" }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.brandText}>{item?.brand} {item?.specs}</Text>
        <Text style={styles.priceText}>{`$ ${(quantity * Number(item?.price))}`}</Text>
        <Text style={styles.stockText}>In stock</Text>

        <View style={styles.controlsRow}>
          <View style={styles.quantityControls}>
            <TouchableOpacity
              onPress={onDecrease}
              style={[{ backgroundColor: "#E2E8F0" }, styles.cartButton]}
            >
              <Remove />
            </TouchableOpacity>

            <Text style={{ marginHorizontal: 25 }}>{quantity}</Text>

            <TouchableOpacity
              onPress={onIncrease}
              style={[{ backgroundColor: "#FFFFFF" }, styles.cartButton]}
            >
              <Add />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={onRemove}
            style={[{ backgroundColor: "#FFFFFF", marginLeft: 65 }, styles.cartButton]}
          >
            <Delete />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    width: "100%",
    height: 145,
    backgroundColor: "#F6F5F8",
    borderRadius: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 8,
    marginTop:15
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 20,
  },
  brandText: {
    fontFamily: fonts.sfText.regular,
    color: "#334155",
    fontSize: 13,
marginTop:10
  },
  priceText: {
    marginTop: 2,
    fontSize: 14,
    fontFamily: fonts.sfText.bold,
    color: "#334155",
  },
  stockText: {
    marginTop: 3,
    fontSize: 13,
    fontFamily: fonts.sfText.regular,
    color: "#10B981",
  },
  controlsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartButton: {
    borderRadius: 32,
    paddingHorizontal: 5,
    paddingVertical: 5.5,
    borderColor: "#E2E8F0",
    borderWidth: 1,
  },
});
