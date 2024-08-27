import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Campo, MainContainer, Titulo, TituloCampo } from '../../styles'
import { BotaoSalvar, Form, FormCard, Grid } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        telefone,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <FormCard>
          <Grid>
            <TituloCampo htmlFor="nome">Nome Completo:</TituloCampo>
            <Campo
              required
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <TituloCampo htmlFor="email">E-mail:</TituloCampo>
            <Campo
              required
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TituloCampo htmlFor="telefone">Telefone:</TituloCampo>
            <Campo
              required
              type="text"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </Grid>
          <BotaoSalvar type="submit">Salvar</BotaoSalvar>
        </FormCard>
      </Form>
    </MainContainer>
  )
}

export default Formulario
