import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../Screens/HomeScreen';
import DetailsRestoPage from '../Screens/DetailsRestoScreen';
import DishDetailScreen from '../Screens/DishDetailScreen';
import Basket from '../Screens/Basket';
import OrderScreen from '../Screens/OrderScreen';
import OrderDetails from '../Screens/OrderDetails';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {Foundation, FontAwesome5, MaterialIcons} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();


const RootNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>

            <Stack.Screen name="HomeTabs" component={HomeTabs}/>
            {/* <Stack.Screen name="Restaurant" component={DishDetailScreen} options={{headerShown:false}}/> */}

        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

    const HomeTabs=()=>{

        return(
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeStackNavigator} options={{
                        tabBarIcon:({color})=><Foundation name="home" size={24} color={color} />
                    }} />
                    <Tab.Screen name="Orders" component={OrderStackNavigator} options={{
                        tabBarIcon:({color})=><MaterialIcons name="list-alt" size={24} color={color} />
                    }} />
                    <Tab.Screen name="Profile" component={OrderScreen} options={{
                        tabBarIcon:({color})=><FontAwesome5 name="user-alt" size={24} color={color} />
                    }} />
                </Tab.Navigator>
        );

    };

    const HomeStack = createNativeStackNavigator();
    const HomeStackNavigator= () =>{

        return(
            <HomeStack.Navigator>
            <HomeStack.Screen name="Restaurants" component={HomeScreen}/>
            <HomeStack.Screen name="Restaurant" component={DetailsRestoPage}/>
            <HomeStack.Screen name="Dish" component={DishDetailScreen}/>
            <HomeStack.Screen name="Basket" component={Basket}/>
            </HomeStack.Navigator>
        )


    }




    const OrderStack = createNativeStackNavigator();
    const OrderStackNavigator= () =>{

        return(
            <OrderStack.Navigator>
            <OrderStack.Screen name="Orders" component={OrderScreen}/>
            <OrderStack.Screen name="Order" component={OrderDetails}/>
            </OrderStack.Navigator>
        )


    }


export default RootNavigator;