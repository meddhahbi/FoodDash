import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import RestaurantItem from './src/Components/RestaurantItem';
import restaurants from './assets/data/restaurants.json';
import HomeScreen from './src/Screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
{/*       
      <RestaurantItem restaurant={restaurants[0]}/>
      <RestaurantItem restaurant={restaurants[1]}/> */}

        <HomeScreen />

   <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    paddingVertical:30,
  },
});
