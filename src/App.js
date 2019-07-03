import React from 'react';
import logo from './assets/images/chuck-norris.png';
import Jokes from './components/Jokes/Jokes';
import Categories from './components/Categories/Categories';
import Favourites from './components/Favourites/Favourites';
import './App.css';

function App() {
  return (
    <div>
      <header className="Header">
        <img src={logo} alt="logo" />
        <h1>Chuck Norris Jokes</h1>
      </header>
      <div className="Main">
        <Jokes />
        <Categories />
        <Favourites />
      </div>
    </div>
  );
}

export default App;
