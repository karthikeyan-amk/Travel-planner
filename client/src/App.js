import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import ExpenseManager from './components/ExpenseManager';


function App() {
  return (
    <div className="container mx-auto scroll-smooth md:scroll-auto">
      <Navbar />
      <Home />
      <ExpenseManager />
    </div>
  );
}

export default App;
