import {View, FlatList} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import {Ionicons} from"@expo/vector-icons";
import DishListItem from '../../Components/DishListItem';
import Header from './Header';
import styles from './Styles';
import { useRoute,useNavigation } from '@react-navigation/native';

const restaurant = restaurants[0];


const DetailsRestoPage = () =>{

    const route = useRoute();
    const navigation = useNavigation();


    const id = route.params?.id;
    console.warn(id);


    return (

        <View style={styles.page}>
            <FlatList 
                ListHeaderComponent={()=><Header restaurant={restaurant} />}
                data={restaurant.dishes}
                renderItem={({item})=><DishListItem dish={item} />}
                keyExtractor={(item)=>item.name}
            />

            {/* <DishListItem dish = {restaurant.dishes[0]} />
            <DishListItem dish = {restaurant.dishes[1]} /> */}
            

            <Ionicons 
                onPress={()=>navigation.goBack()}
                name="arrow-back-circle"
                size = {45}
                color = "white"
                style={styles.iconContainer}
            />


        </View>


    )



}





export default DetailsRestoPage;