// External libraries
import React, {
	ReactNode 
} from 'react'

// Styled
import {
	Container
} from './styles'

interface HeaderChartProps {
	children: ReactNode
	title: string
}

const HeaderChart: React.FC<HeaderChartProps> = ({
	children,
	title
}) => {
	return (
		<Container>
			<h5>{title}</h5>
			{children}
		</Container>
	)
}

export default HeaderChart
