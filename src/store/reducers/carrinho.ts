import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from './produtos'

type CarrinhoState = {
  produto: Produto[]
}

const initialState: CarrinhoState = {
  produto: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const novoProduto = action.payload

      if (state.produto.find((produto) => produto.id === novoProduto.id)) {
        alert('Item já adicionado')
      } else {
        state.produto.push(novoProduto)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
