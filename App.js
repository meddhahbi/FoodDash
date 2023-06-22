import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import DetailsRestoPage from './src/Screens/DetailsRestoScreen';
import DishDetailScreen from './src/Screens/DishDetailScreen';
import Basket from './src/Screens/Basket';
import OrderScreen from './src/Screens/OrderScreen';

export default function App() {
  return (
    <View style={styles.container}>
{/*       
      <RestaurantItem restaurant={restaurants[0]}/>
      <RestaurantItem restaurant={restaurants[1]}/> */}

        {/* <HomeScreen /> */}

        {/* <DetailsRestoPage /> */}

        {/* <DishDetailScreen /> */}

        {/* <Basket /> */}

        <OrderScreen />

   <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding:10,
    // paddingVertical:30,
  },
});
