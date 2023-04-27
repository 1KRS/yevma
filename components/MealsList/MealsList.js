import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

const MealsList = ({displayedMeals}) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        id={itemData.item.id}
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(i) => i.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};
export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    marginBottom: 25,
  },
});
