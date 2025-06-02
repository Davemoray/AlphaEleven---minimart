import ColorList from "@/components/color-list";
import Header from "@/components/Header";
import { useRouter } from "expo-router";
import { Text } from "react-native";

const Favorite = () => {
  const router = useRouter();

  return (
    <Header
      hasSearch={false}
      navigationText={"Favorites"}
      navigateBack={() => router.back()}
    >
      <Text>Favorites</Text>
      <ColorList color="#ff7000" />
    </Header>
  );
};

export default Favorite;
