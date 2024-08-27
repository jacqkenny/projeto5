import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Alissandra Oliveira',
      email: 'alissandra@mail.com',
      telefone: '(61) 11111-1111'
    },
    {
      id: 2,
      nome: 'Bruna Almeida',
      email: 'bruna@mail.com',
      telefone: '(61) 11111-2222'
    },
    {
      id: 3,
      nome: 'Paulo Silva',
      email: 'paulo@mail.com',
      telefone: '(61) 11111-3333'
    },
    {
      id: 4,
      nome: 'Ana Maria',
      email: 'ana@mail.com',
      telefone: '(61) 11111-4444'
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
