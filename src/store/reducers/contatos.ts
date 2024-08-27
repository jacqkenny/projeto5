import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Jacqueline Kenny',
      email: 'jacq.kenny@mail.com',
      telefone: '(53) 99999-5555'
    },
    {
      id: 2,
      nome: 'João Carlos',
      email: 'jc@mail.com',
      telefone: '(53) 99999-6666'
    },
    {
      id: 3,
      nome: 'Maria Carla',
      email: 'mc@mail.com',
      telefone: '(53) 99999-7777'
    },
    {
      id: 4,
      nome: 'Mariana Cunha',
      email: 'mari@mail.com',
      telefone: '(53) 99999-8888'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (c) => c.telefone === action.payload.telefone
      )
      if (contatoExiste) {
        alert('Número de telefone já cadastrado!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
