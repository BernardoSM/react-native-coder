import React from 'react'
import { View, StyleSheet } from 'react-native'

import Primeiro from './components/Primeiro'
import X, { Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio' 
import Titulo from './components/Titulo' 
import Botao from './components/Botao' 
import Contador from './components/Contador'
import Pai from './components/direta/Pai'

export default _ => (
	<View style={style.App}>
		<Pai/>
		<Contador inicial={100} />
		<Botao/>
		<Titulo principal="Principal" secundario="Wolf"/>
		<Aleatorio min={5} max={15}/>
		<MinMax min={3} max={20}/>
		<X/>
		<Comp1/>
		<Comp2/>
		<Primeiro/>
	</View>
)

const style = StyleSheet.create({
	App: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})