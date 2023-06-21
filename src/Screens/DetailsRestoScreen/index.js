import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import {Ionicons} from"@expo/vector-icons";
import DishListItem from '../../Components/DishListItem';
import Header from './Header';
import styles from './Styles';

const restaurant = restaurants[0];


const DetailsRestoPage = () =>{

    return (

        <View style={styles.page}>
            <FlatList 
                ListHeaderComponent={()=><Header restaurant={restaurant} />}
                data={restaurant.dishes}
                renderItem={({item})=><DishListItem dish={item} />}
            />

            {/* <DishListItem dish = {restaurant.dishes[0]} />
            <DishListItem dish = {restaurant.dishes[1]} /> */}
            

            <Ionicons 
                name="arrow-back-circle"
                size = {45}
                color = "white"
                style={styles.iconContainer}
            />


        </View>


    )



}





export default DetailsRestoPage;