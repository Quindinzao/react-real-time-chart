// External libraries
import React, {
	useContext,
	useEffect,
	useState 
} from 'react'
import Chart from 'react-google-charts'

// Components
import HeaderChart from '../../../../common/HeaderChart'

// Hooks
import {
	DarkLightContext 
} from '../../../../../hooks/contexts/DarkLightContext'

// Styled
import {
	Container
} from './styles'
import light from '../../../../../styles/themes/light'
import dark from '../../../../../styles/themes/dark'

const RealTimeChart: React.FC = () => {
	const [ dataChart, setDataChart ] = useState([ [ 'Unidade de tempo', 'Unidade de medida' ] ])
	const [ pause, setPause ] = useState(false)

	const {
		theme 
	} = useContext(DarkLightContext)

	const styledItemsChart = {
		backgroundColorChart: theme === dark ? dark.colors.backgroundChart : light.colors.backgroundChart,
		lineChart: theme === dark ? dark.colors.terciary : light.colors.terciary
	}

	const fetchData = () => {
		if (pause) return
		console.log(pause)
		const lastValueRead = Math.floor(Math.random() * 10)
		const now = new Date()
				
		setDataChart((previousState: any) => {
			const newDataArray =  [ ...previousState, [ now.toLocaleTimeString(), lastValueRead ] ]
			if(newDataArray.length > 31) 
				newDataArray.splice(1, 1)
					
			return newDataArray
		})
	}

	const handlePause = () => setPause(!pause)
	
	const options = {
		curveType: 'function',
		legend: {
			position: 'bottom' 
		},
		series: {
			0: {
				color: styledItemsChart.lineChart
			}
		},
		backgroundColor: styledItemsChart.backgroundColorChart
	}
  
	useEffect(() => {
		const intervalId = setInterval(() => {
			fetchData()
		}, 1000)
		return () => {
			clearInterval(intervalId)
		}
	}, [ pause ])

	return (
		<Container>
			<HeaderChart title={'React Real-Time Chart'}>
				<button onClick={handlePause}>
					{pause 
						? <img src='/png/play-button.png' alt='pause' />
						: <img src='/png/pause-button.png' alt='pause' />
					}
				</button>
			</HeaderChart>
			<Chart
				chartType='LineChart'
				width='100%'
				height='400px'
				data={dataChart}
				options={options}
			/>
		</Container>
	)
}

export default RealTimeChart
