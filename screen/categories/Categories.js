import {
    Button,
    Text,
    View,
} from 'react-native';

import React from 'react';

const Categories =({navigation})=>{
    return(
        <View>
            <Text>CATEGORIAS</Text>
            <Button title='Ir a productos' onPress={()=> navigation.navigate('ListProduct')} />
        </View>
    )
}

export default Categories;