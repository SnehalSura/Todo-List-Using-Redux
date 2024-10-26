import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Components/TodoList'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {

  return (
    <>
    <Provider store={store}>
       <TodoList/>
    </Provider>
      
    </>
  )
}

export default App
