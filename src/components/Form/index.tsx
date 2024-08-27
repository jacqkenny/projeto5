import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Button, Input } from '../../styles/colors'
import * as S from './styles'
import generateId from '../../utils/generateId'
import { add } from '../../store/reducers/contacts'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const addContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newContact = {
      id: generateId(),
      name,
      email,
      phone
    }

    dispatch(add(newContact))
    navigate('/')
  }

  return (
    <S.FormContainer>
      <h2>Adicionar Contato</h2>
      <S.Form onSubmit={addContact}>
        <Input
          type="text"
          id="name"
          placeholder="Digite o Nome"
          required
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <Input
          type="email"
          id="email"
          placeholder="Digite o Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <Input
          type="text"
          id="tel"
          placeholder=" Digite o Número"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          required
        />
        <S.Container>
          <Button type="submit">Adicionar Contato</Button>
        </S.Container>
      </S.Form>
    </S.FormContainer>
  )
}

export default Form
