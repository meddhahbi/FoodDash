import { View, Text, StyleSheet, FlatList } from "react-native";
import restaurants from '../../../assets/data/restaurants.json';
import {AntDesign} from '@expo/vector-icons';
import { useState } from "react";
import BasketDishIem from "../../Components/BasketDishItem";

const restaurant = restaurants[0];

const Basket = ()=>{


    return(

        <View style={styles.page}>
            <Text style={styles.title}>{restaurant.name}</Text>

            <Text style={{fontWeight:"bold", marginTop:20, fontSize:19}}>Your items</Text>


            <FlatList data={restaurant.dishes} renderItem={({item})=> <BasketDishIem basketDish={item} />} />



            <View style={styles.separator}></View>

          

                <View style={styles.btn}>
                    <Text style={styles.btnText}>Make order</Text>
                </View>

        </View>
    )



}

const styles = StyleSheet.create({
    page:{
        flex:1,
        width:"100%",
        paddingVertical:30,
        padding:10,
    },
    title:{
        fontSize:24,
        fontWeight:"600",
        marginVertical:10,
    },
    separator:{
        height:1,
        backgroundColor:"lightgray",
        marginVertical:10,
    },
    description:{
        color:"gray",
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:15,
        paddingHorizontal:10,
    },
    quantity:{
        fontSize:25,
        marginHorizontal:20,

    },
    btn:{
        backgroundColor:"black",
        marginTop:"auto",
        padding:20,
        alignItems:"center",
    },
    btnText:{
        color:"white",
        fontWeight:"600",
        fontSize:18,
    },
    quantityContainer:{
        backgroundColor:"lightgray",
        paddingHorizontal:5,
        paddingVertical:2,
        marginRight:10,
        borderRadius:3,
    }
})


export default Basket;