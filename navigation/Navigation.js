import Categories from '../screen/categories/Categories';
import ContenedorCategoria from '../screen/ContenedorCategoria/ContenedorCategoria';
import ListProduct from '../screen/listProduct/ListProduct';
import { NavigationContainer } from '@react-navigation/native';
import ProductDitail from '../screen/productDetail/ProductDetail';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const Navigation =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName= "Inicio"
                screenOptions={{
                    headerStyle:{
                        backgroundColor: '#212529'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {fontWeight: 'bold'}
                
                }}>

                <Stack.Screen 
                name='Categorias' 
                component={ContenedorCategoria} 
                />

                <Stack.Screen 
                name='Productos' 
                component={ListProduct} 
                />

                <Stack.Screen name='ProductDitail' component={ProductDitail} />
            </Stack.Navigator>
        </NavigationContainer>
        )
}

export default Navigation;