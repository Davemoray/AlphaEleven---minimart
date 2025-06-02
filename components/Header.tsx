import { Bell, Left } from "@/assets/svg";
import { fonts } from "@/utils/fonts";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface HeaderProps {
  children: ReactNode;
  hasSearch: boolean;
  navigationText: string;
  searchText?: string;
  setSearchText?: (text: string) => void;
  navigateBack?: ()=> void
}

const Header = ({
  children,
  hasSearch,
  navigationText,
  searchText,
  setSearchText,
  navigateBack
}: HeaderProps) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View
            style={{
              borderStyle: "dashed",
              height: 30,
              paddingHorizontal: 2,
              borderColor: "#2563EB",
              borderWidth: 1,
              backgroundColor: "#93C5FD",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                { fontSize: 10.5, fontWeight: 600, color: "#2563EB" },
                styles.address,
              ]}
            >
              Full Logo
            </Text>
          </View>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={[{ fontSize: 12, marginBottom: 10 }, styles.address]}>
              DELIVERY ADDRESS
            </Text>
            <Text style={[{ fontSize: 14 }, styles.address]}>
              Umuezike Road, Oyo State
            </Text>
          </View>
          <Bell />
        </View>

        {hasSearch && (
          <View style={styles.searchContainer}>
            <AntDesign
              name="search1"
              size={20}
              color="#94A3B8"
              style={{ marginRight: 10 }}
            />
            <TextInput
              placeholder="Search..."
              placeholderTextColor="#94A3B8"
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.navigationConatiner}
        onPress={navigateBack}
      >
        <Left />
        <Text
          style={{
            fontWeight: 700,
            fontSize: 18,
            marginLeft: 10,
            fontFamily: fonts?.sans?.bold,
          }}
        >
          {navigationText}
        </Text>
      </TouchableOpacity>
      {children}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: "20%",
  },
  headerContainer: {
    borderWidth: 1.3,
    borderColor: "white",
    borderBottomColor: "#E2E8F0",
  },
  header: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
  },
  address: {
    color: "#334155",
    fontWeight: 600,
    fontFamily: fonts?.sans?.bold,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginHorizontal: "5%",
    marginBottom: 20,
    borderColor: "#E2E8F0",
    borderWidth: 1,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#0F172A",
    paddingVertical: 10,
  },
  navigationConatiner: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderTopWidth:1.5,
    borderColor: "#F5F5F5",
    // borderTopColor: "#F5F5F5",
  },
});
