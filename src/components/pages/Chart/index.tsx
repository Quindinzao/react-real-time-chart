// External libraries
import React from 'react'

// Components
import Sidebar from '../../common/Sidebar'
import RealTimeChart from './components/RealTimeChart'

// Styled
import {
	Container,
	Content
} from './styles'

const Chart: React.FC = () => {
	return (
		<Container>
			<Content>
				<h2>Charts</h2>
				<RealTimeChart />
			</Content>
			<Sidebar chart={true} />
		</Container>
	)
}

export default Chart
