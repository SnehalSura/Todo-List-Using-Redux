import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from '../features/Todo/TodoSlice'

export const store = configureStore({
  reducer: {
    Todo : TodoReducer,
  },
})

