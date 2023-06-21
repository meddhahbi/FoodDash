import { View, Text, StyleSheet } from "react-native";
import restaurants from '../../../assets/data/restaurants.json';
import {AntDesign} from '@expo/vector-icons';
import { useState } from "react";


const dish = restaurants[0].dishes[0];


const DishDetailScreen = ()=>{

    const [quantity, setQuantity] = useState(1);

    const onMinus = () =>{
        if(quantity>1){
        setQuantity(quantity-1)
        }
    }

    const onPlus = () =>{
        setQuantity(quantity+1)
    }
   
    const totalPrice = () =>{
        return (dish.price * quantity).toFixed(2);
    }

    return(

        <View style={styles.page}>
            <Text style={styles.title}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator}></View>

            <View style={styles.row}>

                <AntDesign name="minuscircleo" size={60} color={"black"} onPress={onMinus}></AntDesign>

                <Text style={styles.quantity}>{quantity}</Text>

                <AntDesign name="pluscircleo" size={60} color={"black"} onPress={onPlus}></AntDesign>


            </View>

                <View style={styles.btn}>
                    <Text style={styles.btnText}>Add {quantity} to basket &#8226; (${totalPrice()})</Text>
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
        fontSize:30,
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
        justifyContent:"center",
        marginTop:50,
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
    }
})


export default DishDetailScreen;