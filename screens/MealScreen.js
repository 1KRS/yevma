import { Text, View } from "react-native"

const MealScreen = ({route}) => {
  const mealId = route.params.mealId
  return (
    <View>
      <Text>Πληροφορίες Γεύματος ({mealId})</Text>
    </View>
  )
}
export default MealScreen