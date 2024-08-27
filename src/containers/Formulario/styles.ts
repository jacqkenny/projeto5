import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 900px;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
`

export const FormCard = styled.div`
  background-color: ${variaveis.corCard};
  padding: 24px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  background-color: ${variaveis.corCard};
  padding: 24px;
`
export const Botao = styled.button`
  border-radius: 16px;
  padding: 8px 16px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.corHeaderCard};
  color: #000;
  font-size: 16px;
  font-weight: bold;
  border: none;
  margin-left: 56px;
  cursor: pointer;
`
