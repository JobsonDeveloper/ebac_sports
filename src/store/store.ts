import { configureStore } from '@reduxjs/toolkit'
import favoritosSlice from './reducers/favoritos'
import carrinhoSlice from './reducers/carrinho'
import produtoSlice from './reducers/produtos'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    favoritos: favoritosSlice,
    carrinho: carrinhoSlice,
    produtos: produtoSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
