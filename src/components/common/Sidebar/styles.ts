// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/themes/dark'
import mq from '../../../styles/breakpoint'

interface SidebarProps {
  isActive: boolean
}

export const Container = styled.div<SidebarProps>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;

  ${mq({ 
		width: [
			props => props.isActive ? '100%' : 'fit-content',
			props => props.isActive ? '100%' : 'fit-content',
			'15rem',
			'15rem'
		],
		height: [
			props => props.isActive ? '100%' : 'fit-content',
			props => props.isActive ? '100%' : 'fit-content',
			'100vh',
			'100vh'
		],
		backgroundColor: [
			props => props.isActive ? theme.colors.gray_700 : 'transparent',
			props => props.isActive ? theme.colors.gray_700 : 'transparent',
			theme.colors.gray_700,
			theme.colors.gray_700
		]
	})};
`

export const ContentImage = styled.div<SidebarProps>`
  width: 100%;
  height: fit-content;

  padding-top: 4rem;
  padding-bottom: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${mq({ 
		display: [
			props => props.isActive ? 'flex' : 'none',
			props => props.isActive ? 'flex' : 'none',
			'flex',
			'flex'
		]
	})};
`

export const Content = styled.div<SidebarProps>`
  height: calc(100% - 5rem);

  flex-direction: column;

  h5 {
		width: 100%;
		
		margin-bottom: 2rem;

		display: flex;
		align-items: center;
		justify-content: space-between;

    font-size: 1.5rem;
    letter-spacing: 2.5px;
    color: ${theme.colors.primary};

		${mq({
		justifyContent: [
			'center',
			'center',
			'space-between',
			'space-between'
		]
	})}
  }

  ${mq({
		width: [
			'100%',
			'100%',
			'12.5rem',
			'12.5rem' 
		],
		alignItems: [
			'center',
			'center',
			'flex-start',
			'flex-start' 
		],
		display: [
			props => props.isActive ? 'flex' : 'none',
			props => props.isActive ? 'flex' : 'none',
			'flex',
			'flex'
		]
	})};
`

interface LinkProps {
  isActive?: boolean
}

export const Link = styled.a<LinkProps>`
  width: 100%;
  height: 3rem;

  margin-top: 5px;
  padding-left: 12px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border: none;
  border-radius: 10px 0px 0px 10px;
  background-color: transparent;

  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2.5px;
  line-height: 18px;
  text-decoration: none;
  color: ${(props) => props.isActive
		? theme.colors.primary
		: theme.colors.link
};

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.gray_400};
  }

  ${mq({ 
		width: [
			'fit-content',
			'fit-content',
			'100%',
			'100%'
		],
		paddingRight: [
			'12px',
			'12px',
			'0px',
			'0px' 
		],
		borderRadius: [
			'10px',
			'10px',
			'10px 0px 0px 10px',
			'10px 0px 0px 10px' 
		]
	})};
`

export const ButtonMenu = styled.button`
  width: 64px;
  height: 64px;

  display: none;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;

  font-size: 2rem;
  color: ${theme.colors.primary};

  position: fixed;
  top: 12px;
  left: 12px;

  ${mq({
		display: [
			'flex',
			'flex',
			'none',
			'none' 
		] 
	})};
`
