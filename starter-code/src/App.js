import React from 'react';
import logo from './logo.svg';
import './App.css';

import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox';
import FormAddFood from './components/FormAddFood/FormAddFood';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { open: false, foods: foods }
    this.addFoodHandler = this.addFoodHandler.bind(this);
  }

  addFoodHandler (e, state) {
    e.preventDefault()
    const newFood = {
      name: state.name,
      image: state.img,
      calories: state.calories,
      quantity: 0
    }
    const newFoodArr = [...this.state.foods];
    newFoodArr.push(newFood);
    this.setState({...this.state, foods: newFoodArr});
   // console.log(this.state.foods);
  }

  addNewFood = () => {
    this.setState({ ...this.state, open: true })
  }

  render() {
    let displayForm;

    if (this.state.open) {
      displayForm = "block"
    } else {
      displayForm = "none"
    }
    console.log(this.state)
    const foodBoxes = this.state.foods.map((food) => {
      return (<FoodBox food={food} />)
    })

    // console.log(foodBoxes);

    return (
      <div className="App">
         <button onClick={this.addNewFood}>Add New Food</button>
        <div style={{ display: displayForm }}>
         <FormAddFood addFoodHandler={this.addFoodHandler}/>
        </div>
        {foodBoxes}
      </div>
    );
  }
}

