import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

const MealScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((m) => m.id === mealId);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      </View>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailsText}
      />
      <Subtitle>Ingredients</Subtitle>
      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <List data={selectedMeal.ingredients} />
        </View>
      </View>
      <Subtitle>Steps</Subtitle>
      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};
export default MealScreen;
``;

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  imageContainer: {
    marginTop: 8,
    paddingHorizontal: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 4,
    shadowColor: 'white',
    shadowOpacity: 0.75,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 15,
  },
  title: {
    color: 'darkgreen',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
    margin: 8,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
  },
  detailsText: {
    color: 'darkgreen',
  },
  subtitleContainer: {
    borderBottomColor: 'green',
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 8,
    marginHorizontal: 24,
  },
  subtitle: {
    color: 'darkgreen',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listInnerContainer: {
    width: '90%',
  },
});
