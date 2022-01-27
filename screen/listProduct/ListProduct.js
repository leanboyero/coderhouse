import {
    Button,
    Text,
    View,
} from 'react-native';

import React from 'react';

const ListProduct =({navigation})=>{
    return(
        <View>
        <Text>LISTA DE PRODUCTOS</Text>
        <Button title='Ir a productos' onPress={()=> navigation.navigate('ProductDitail')} />
    </View>
    )
}

export default ListProduct;