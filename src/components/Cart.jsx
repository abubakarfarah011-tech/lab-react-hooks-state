import { useState } from 'react';

function Cart({ initialItems = [] }) {
  // State to hold cart items
  const [cartItems, setCartItems] = useState(initialItems);

  // Example function to add item (for the "adds items to cart" test)
  const addItem = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <button onClick={() => document.body.classList.toggle('dark')}>
        Toggle Dark Mode
      </button>

      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index}>{item.name} is in your cart.</li>
          ))
        ) : (
          <li>No items in your cart.</li>
        )}
      </ul>

      {/* Example button to add item */}
      <button onClick={() => addItem({ name: 'Sample Product' })}>
        Add Sample Product
      </button>
    </div>
  );
}

export default Cart;
