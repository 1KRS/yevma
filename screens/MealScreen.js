import { Image, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

const MealScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((m) => m.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
      <Text>{selectedMeal.steps}</Text>
    </View>
  );
};
export default MealScreen;
``;
