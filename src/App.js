import React from 'react';
import HamburgerMenu from './components/HamburgerMenu';
import HorizontalMenu from './components/HorizontalMenu';
import EmployeeGrid from './components/EmployeeGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <HamburgerMenu />
      <HorizontalMenu />
      <h1>Employee Directory</h1>
      <EmployeeGrid />
    </div>
  );
}

export default App;
