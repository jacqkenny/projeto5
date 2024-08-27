import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import ContactClass from '../../models/Contact'

interface ContactState {
  items: ContactClass[]
}

const initialState: ContactState = {
  items: [
    {
      id: 1,
      name: 'Davis Lamenha Sampaio',
      email: 'davislamenha@gmail.com',
      phone: '82994208093',
      favorite: true
    },
    {
      id: 2,
      name: 'Ana Barros',
      email: 'anab@gmail.com',
      phone: '82988195984'
    },
    {
      id: 3,
      name: 'Dione Lucia',
      email: 'dionel@gmail.com',
      phone: '82988786404'
    },
    {
      id: 4,
      name: 'Laise Lamenha',
      email: 'laisel@gmail.com',
      phone: '82994208080'
    }
  ]
}

const contactsReducer = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ContactClass>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      const contactIndex = state.items.findIndex(
        ({ id }) => id === action.payload
      )

      state.items.splice(contactIndex, 1)
    },
    edit: (state, action: PayloadAction<ContactClass>) => {
      const contactIndex = state.items.findIndex(
        ({ id }) => id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    },
    switchFavorite: (state, action: PayloadAction<number>) => {
      const contact = state.items.find(({ id }) => id === action.payload)

      if (contact) contact.favorite = !contact.favorite
    }
  }
})

export const { add, edit, remove, switchFavorite } = contactsReducer.actions
export default contactsReducer.reducer
