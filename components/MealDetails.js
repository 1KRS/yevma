import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({duration, complexity, affordability}) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration}'</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};
export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 5,
  },
  detailItem: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});