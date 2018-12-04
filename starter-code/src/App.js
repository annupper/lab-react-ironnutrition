import React from 'react';
import logo from './logo.svg';
import './App.css';

import FormField from './components/FoodBox/FoodBox';

import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox';

export default class App extends React.Component {
  constructor() {
    super()
    //this.state = {food:foods}
  }
  render() {
    const foodBoxes = foods.map((food) =>{
      return (<FoodBox food={food}/>)
    })

    console.log(foodBoxes);

    return (
      <div className="App">
      {foodBoxes}
      </div>
    );
  }
}

