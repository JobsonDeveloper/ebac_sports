import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from './produtos'

type FavoritoState = {
  produto: Produto[]
}

const initialState: FavoritoState = {
  produto: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const novoProduto = action.payload

      if (state.produto.find((produto) => produto.id === novoProduto.id)) {
        const idxElementoRemover = state.produto.findIndex(
          (element) => element.id === novoProduto.id
        )
        state.produto.splice(idxElementoRemover, 1)
      } else {
        state.produto.push(novoProduto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
