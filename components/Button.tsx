import { fonts } from "@/utils/fonts";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  title: string;
  action: () => void;
  buttonColor?: string;
  buttonTextColor?: string;
}

const Button = ({
  title,
  action,
  buttonColor = "#60B5FF",
  buttonTextColor = "#FFFFFF",
}: ButtonProps) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderTopColor: "#F3F4F6",
        borderColor: "transparent",
        alignItems: "center",
        padding: 15,
      }}
    >
      <TouchableOpacity style={[{backgroundColor:buttonColor},styles?.buttonContainer]} onPress={action}>
        <Text style={{ color: buttonTextColor, fontFamily: fonts.sans.bold }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 30,
  },
});

export default Button;


