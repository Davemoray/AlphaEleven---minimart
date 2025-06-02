import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ToastProps {
  message: string;
  visible: () => void;
}

const CustomToast = ({ message, visible }: ToastProps) => {
  return (
    <View style={styles.toastContainer}>
      <View style={styles.greenBar} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#FFFFFF",
          height: 70,
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: 7,
          borderBottomLeftRadius: 7,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          paddingHorizontal: 10,
        }}
      >
        {/* <AntDesign
          name="checkcircleo"
          size={20}
          color="#10B981"
          style={styles.icon}
        /> */}
        <MaterialCommunityIcons
          name="check-circle-outline"
          size={22}
          color="#10B981"
          style={styles.icon}
        />

        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity onPress={visible}>
          <AntDesign name="close" size={20} color="#1E293B" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    height: 70,
    paddingRight: 0,
    paddingLeft: 5,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  greenBar: {
    width: 20,
    backgroundColor: "#10B981",
    height: "100%",
    position: "absolute",
    left: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  icon: {
    marginRight: 12,
  },
  message: {
    flex: 1,
    fontSize: 16,
    color: "#1E293B",
    fontWeight: "500",
  },
});

export default CustomToast;
