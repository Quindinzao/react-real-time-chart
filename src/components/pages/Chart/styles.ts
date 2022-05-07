// External libraries
import styled from 'styled-components'

// Styled
import mq from '../../../styles/breakpoint'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 5rem 5rem 5rem 17rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${mq({
		padding: [
			'16px',
			'24px',
			'5rem 5rem 5rem 17rem',
			'5rem 5rem 5rem 17rem'
		]
	})}
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
