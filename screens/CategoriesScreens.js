import { View, Text, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreens({ navigation }) {
  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("Meals Overview", {
        categoryId: item.id,
      });
    };

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
