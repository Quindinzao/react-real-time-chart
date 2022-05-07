// External libraries
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  border-bottom: 3px solid ${props => props.theme.colors.secondary};
  border-left: 3px solid ${props => props.theme.colors.secondary};
  border-right: 3px solid ${props => props.theme.colors.secondary};
`
