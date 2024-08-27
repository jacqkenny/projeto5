import styled, { createGlobalStyle } from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Header = styled.div`
  background-color: ${variaveis.corHeaderCard};
  padding: 8px;
  max-width: 900px;

  p {
    color: ${variaveis.corDeFundo};
    font-weight: bold;
    font-size: 32px;
    background-color: transparent;
  }
`
