import React from 'react'
import { Text } from 'react-native'

import Filho from './Filho'

export default props => {
	let x = 13
	let y = 10

	return (
		<>
			<Filho x={x+10} y={y+23}></Filho>
		</>
	)
}