import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import DetailsRestoPage from './src/Screens/DetailsRestoScreen';

export default function App() {
  return (
    <View style={styles.container}>
{/*       
      <RestaurantItem restaurant={restaurants[0]}/>
      <RestaurantItem restaurant={restaurants[1]}/> */}

        {/* <HomeScreen /> */}

        <DetailsRestoPage />

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
