import { fonts } from "@/utils/fonts";
import { StyleSheet, Text, View } from "react-native";

interface ProductDescriptionProps {
  bulletPoints: string[];
}

const ProductDescription = ({bulletPoints }: ProductDescriptionProps) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.descriptionText}>About this item</Text>
      {bulletPoints.map((point, index) => (
        <Text key={index} style={[styles.descriptionText, { marginLeft: 10 }]}>
          • {point}
        </Text>
      ))}
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
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
