import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../components/Produto/styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type ProdutoState = {
  produto: Produto[]
}

const initialState: ProdutoState = {
  produto: []
}

const produtoSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      state.produto.push(produto)
    }
  }
})

export const { adicionarProduto } = produtoSlice.actions
export default produtoSlice.reducer
