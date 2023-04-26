import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealScreen from './screens/MealScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#428301' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#BDB51A' },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{ title: 'Κατηγορίες' }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({route, navigation}) => {
            //   const categoryId = route.params.categoryId;
            //   return { title: categoryId };
            // }}
          />
          <Stack.Screen
            name="Meal"
            component={MealScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title='Ζούλα με'/> 
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
