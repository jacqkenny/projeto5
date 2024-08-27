import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  height: 100vh;
  margin: 0 auto;
`

export const Botao = styled.button`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.corBotao};
  border-radius: 50%;
  margin-left: 140px;
  margin-top: 100px;
  height: 64px;
  width: 64px;
`

export const ImagemVoltar = styled.img`
  width: 40px;
  height: 40px;
  background-color: transparent;
  margin-top: 12px;
`
