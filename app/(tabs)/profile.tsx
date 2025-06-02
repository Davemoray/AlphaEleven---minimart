import ColorList from "@/components/color-list";
import Header from "@/components/Header";
import { useRouter } from "expo-router";
import { Text } from "react-native";

const Profile = () => {
  const router = useRouter();

  return (
    <Header
      hasSearch={false}
      navigationText={"Profile"}
      navigateBack={() => router.back()}
    >
      <Text>Profile</Text>
      <ColorList color="#275c7c" />
    </Header>
  );
};

export default Profile;
