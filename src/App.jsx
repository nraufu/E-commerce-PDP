import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [cartItems, setCartItems] = useState([]);

  return (
    <div id='app'>
      <Navbar cartItems={ cartItems }/>
    </div>
  );
}

export default App;
