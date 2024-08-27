import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroStage = {
  termo?: string
}

const initialState: FiltroStage = {
  termo: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alteraTermo } = filtroSlice.actions
export default filtroSlice.reducer
