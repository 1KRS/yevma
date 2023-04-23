import { FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const renderCategoryItem = (itemData) => {
  console.log('ID', itemData);
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

const CategoriesScreen = () => {
  return (
    <FlatList
      // style = {styles.container}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
export default CategoriesScreen;

// styles = StyleSheet.create({
//  container: {
//   marginTop: 35,
//  }
// })
