import React from 'react'
import { Text } from 'react-native'

export default props => {
	const randomNumber = Math.ceil(Math.random() * (props.max - props.min) + props.min)

	return <Text> O número aleatório é: { randomNumber } </Text>
}