// External libraries
import React, {
	useEffect,
	useState 
} from 'react'

// Styled
import {
	Container
} from './styles'

const HeaderChart: React.FC = () => {
	const handlePause = () => {
		console.log('test')
	}
	return (
		<Container>
			<h5>Real-Time Chart</h5>
			<button onClick={handlePause}>
				<img src='/png/pause-button.png' alt='pause' />
			</button>
		</Container>
	)
}

export default HeaderChart
