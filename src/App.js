import React, { useEffect, useState } from 'react';
import './App.css';
import MainMint from './components/MainMint';
import Navbar from './components/Navbar';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="App">
      <h1>Soynx NFT Mint</h1>
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <MainMint accounts={accounts} setAccounts={setAccounts} />
    </div>
  );
}

export default App;
