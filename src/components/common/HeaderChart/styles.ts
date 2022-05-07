// External libraries
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 54px;

  padding: 0px 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.secondary};

  h5 {
    color: #E2E8F0;
  }

  button {
    border: none;
    background: transparent;

    cursor: pointer;

    transition: 0.5s;

    &:hover {
      filter: brightness(85%);
    }
  }
`