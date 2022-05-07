// External libraries
import {
	Switch 
} from '@mui/material'
import React, {
	useContext,
	useState 
} from 'react'

// Hooks
import {
	DarkLightContext 
} from '../../../hooks/contexts/DarkLightContext'

// Assets
import ReactIcon from '../../../assets/svg/reactjs-icon.svg'

// Styled
import {
	ButtonMenu,
	Container,
	Content,
	ContentImage,
	Link
} from './styles'

interface SidebarProps {
  home?: boolean
  chart?: boolean
}

const Sidebar: React.FC<SidebarProps> = ({
	home,
	chart
}) => {
	const [ isActive, setIsActive ] = useState(false)
	
	const {
		checked, setChecked 
	} = useContext(DarkLightContext)

	const handleChange = () => {
		setChecked(!checked)
	}

	return (
		<Container isActive={isActive}>
			<ContentImage isActive={isActive}>
				<ReactIcon />
			</ContentImage>
			<Content isActive={isActive}>
				<h5>MENU
					<Switch 
						checked={checked}
						onChange={handleChange}
						color='default'
					/>
				</h5>
				<Link href='/' isActive={home}>
          HOME
				</Link>
				<Link href='/chart' isActive={chart}>
          CHART
				</Link>
			</Content>
			<ButtonMenu onClick={() => setIsActive(!isActive)}>
        &#9776;
			</ButtonMenu>
		</Container>
	)
}

export default Sidebar
