import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <label>Filter by Category: </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      {/* ✅ Products rendered ONCE via ProductList */}
      <ProductList category={category} addToCart={addToCart} />

      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index}>{item.name} is in your cart</li>
          ))
        ) : (
          <li>No items in your cart.</li>
        )}
      </ul>

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
