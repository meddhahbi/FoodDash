import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import DetailsRestoPage from './src/Screens/DetailsRestoScreen';
import DishDetailScreen from './src/Screens/DishDetailScreen';
import Basket from './src/Screens/Basket';
import OrderScreen from './src/Screens/OrderScreen';
import OrderDetails from './src/Screens/OrderDetails';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (


    <NavigationContainer>

    <View style={styles.container}>
{/*       
      <RestaurantItem restaurant={restaurants[0]}/>
      <RestaurantItem restaurant={restaurants[1]}/> */}

        {/* <HomeScreen /> */}

        {/* <DetailsRestoPage /> */}

        {/* <DishDetailScreen /> */}

        {/* <Basket /> */}

        {/* <OrderScreen /> */}

        <OrderDetails />

   <StatusBar style="light" />
    </View>

    </NavigationContainer>
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
