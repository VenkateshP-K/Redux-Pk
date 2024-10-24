import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import { store } from './Slices/store'
import Home from './Home'
import AddProducts from './AddProducts' 
import Cart from './Cart'
import { BrowserRouter, Route , Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddProducts' element={<AddProducts/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </Provider>
    </BrowserRouter>
  )
}

export default App