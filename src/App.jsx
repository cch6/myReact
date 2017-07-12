import React from 'react'
import './App.css'

import Counter from 'components/Counter'
import GoodsList from 'components/GoodsList'
import Cart from 'components/Cart'

const App = () => (
  <div className='App'>
    <Counter />
    <GoodsList />
    <Cart />
  </div>
)

export default App
