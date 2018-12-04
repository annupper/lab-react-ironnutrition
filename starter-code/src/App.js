import React from 'react';
import logo from './logo.svg';
import './App.css';

import FormField from './components/FoodBox/FoodBox';

import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FoodBox />
      </div>
    );
  }
}

