import React from 'react'
import Cart from './Cart'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import { store } from './Slices/store'
import Products from './Products'

function App() {
  return (
    <Provider store={store}>
    <Cart/>
    </Provider>
  )
}

export default App