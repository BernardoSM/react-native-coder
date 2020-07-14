import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './estilo'

export default props => {
	const [numero, setNumero] = useState(props.inicial)

	const increment = () => setNumero(numero+1)
	const decrement = () => setNumero(numero-1)

	return (
		<>
			<Text style={Estilo.txtG}>{numero}</Text>
			<Button title="+" onPress={increment}/>
			<Button title="-" onPress={decrement}/>
		</>
	)
}