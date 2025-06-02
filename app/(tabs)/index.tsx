import Header from "@/components/Header";
import { products } from "@/data/mockData";
import { useCart } from "@/hooks/stateContext";
import { fonts } from "@/utils/fonts";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  const { setSelectedItemId } = useCart();
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const filteredProducts = products.filter((product) =>
    `${product.brand} ${product.specs} ${product.price}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <Header
      hasSearch={true}
      navigationText={"Technology"}
      searchText={searchText}
      setSearchText={setSearchText}
    >
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 10,
            fontFamily: fonts.mono.regular,
            fontSize: 18,
          }}
        >
          Smartphones, Laptops & Accessories
        </Text>

        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          numColumns={2}
          key={"2-cols"}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.row}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                router.push("/productDetails");
                setSelectedItemId(item?.id);
              }}
            >
              <View style={styles.itemContainer}>
                <Image source={item.image} resizeMode="contain" />
                <Text style={styles.itemText}>{item.brand}</Text>
                <Text style={styles.itemText}>{item.specs}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </Header>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: "#FFFFFF",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 8,
  },
  itemImage: {
    height: 100,
    width: "100%",
    marginBottom: 10,
  },
  itemText: {
    fontFamily: fonts.sans.regular,
    color: "#000",
    fontSize: 14,
  },
  itemPrice: {
    fontFamily: fonts.sans.bold,
    color: "#000",
    marginTop: 4,
    fontSize: 16,
  },
});
