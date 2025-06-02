import { icons } from "@/assets/icons";
import { useCart } from "@/hooks/stateContext";
import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const TabBarButton = (props: any) => {
  const { isFocused, label, routeName, color } = props;
  const scale = useSharedValue(0);
  const { cartItems } = useCart();
  const cartItemCount = cartItems?.length || 0;

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1]);
    const top = interpolate(scale.value, [0, 1], [0, 1]);

    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 1.5]);

    return {
      opacity,
    };
  });
  return (
    <Pressable {...props} style={styles.container}>
      <Animated.View
        style={{
          width: 58,
          height: 30,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isFocused ? color : "transparent",
        }}
      >
        <Animated.View style={[animatedIconStyle]}>
          {icons[routeName]({
            color: isFocused ? "white" : color,
          })}
        </Animated.View>

        {routeName === "cart" && cartItemCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {cartItemCount > 99 ? "99+" : cartItemCount}
            </Text>
          </View>
        )}
      </Animated.View>
      <Animated.Text
        style={[{ marginTop: 5, color: color }, animatedTextStyle]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: 5,
    backgroundColor: "#3C4856", 
    borderRadius: 30,
    minWidth: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default TabBarButton;
