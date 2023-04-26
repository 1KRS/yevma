import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealScreen from './screens/MealScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const BottomTab = createBottomTabNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#428301' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#BDB51A' },
      }}
    >
      <Drawer.Screen name="Κατηγορίες" component={CategoriesScreen} />
      <Drawer.Screen name="Αγαπημένα" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};

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
            name="Πλαϊνή Οθόνη"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="Meal"
            component={MealScreen}
            options={{title: 'Οδηγίες'}}
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
