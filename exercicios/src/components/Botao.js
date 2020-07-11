import React from 'react'
import { Button } from 'react-native'

export default props => {

	const executar = () => {
		console.warn('Executou!!')
	}

	return (
		<>
			<Button
				title="Executar!"
				onPress={executar}
			/>
			<Button
				title="Executar!"
				onPress={() => console.warn('Exec 02')}
			/>
		</>
	)
}
	