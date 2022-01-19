import React, {useState} from 'react';
import {
    Text,
    View,
} from 'react-native';

import CartNumero from './components/cartNumero/CartNumero'
import Header from './components/Header/Header';
import { styles } from './style';

const AdivinarNumero = () =>{
    const [numero, setNumero] = useState('');
    const [valorSeleccionado, setValorSeleccionado] = useState('');
    const [confirmar, setConfirmar] = useState(false);

    const guardarNumero =(num)=>{
        setNumero(num)
    }
    
    const confirmarNumero =()=>{
        const valor = parseInt(numero);
        if( isNaN(valor) || valor<=0 || valor>100 ) return;

        setConfirmar(true);
        setNumero('');
        setValorSeleccionado(valor);

    }

    return (
        <View style={styles.contenedorAdivinaNumero}>
            <Header />
            <Text style={styles.tituloAdivinarNumero}>Comienza el juego</Text>
            <CartNumero numero={numero} guardarNumero={guardarNumero}  confirmarNumero={confirmarNumero}/>
        </View>
    )

}


export default AdivinarNumero;