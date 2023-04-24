import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderMealItem = (itemData) => {
    return <MealItem title={itemData.item.title}/>
    
  }
  return (
    <View style={styles.container}>
      {/* <Text>Meals Overview Screen - {categoryId}</Text> */}
      <FlatList data = {displayedMeals} keyExtractor={i => i.id} renderItem={renderMealItem}/>
    </View>
  );
};
export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
