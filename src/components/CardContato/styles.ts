import styled, { createGlobalStyle } from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: ${variaveis.corCard};
  padding: 16px;
  max-width: 900px;
  display: grid;
  grid-template-columns: auto 1fr 100px;
  margin-bottom: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export const BotoesDeAcao = styled.div`
  background-color: transparent;
  display: inline;
  margin: auto 0;
  justify-content: center;
`

export const LinkBotao = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin-left: 8px;
  background-color: transparent;
`

export const ImagemBotao = styled.img`
  width: 40px;
  height: 40px;
  background-color: transparent;
`

export const Grid = styled.div`
  background-color: transparent;
`
