
import React from "react";

export default class FormAddFood extends React.Component{
  constructor (props) {
    super(props);
   this.state = {name: "", calories: "", img: ""}
}



changeNameHandler = (e) => {
  this.setState(
      { ...this.state, name: e.target.value }
  )
}
changeCaloriesHandler = (e) => {
  this.setState(
      { ...this.state, calories: e.target.value }
  )
}
changeImageHandler = (e) => {
  this.setState(
      { ...this.state, img: e.target.value }
  )
}



  render(){
      return (
        <form className="food-form" onSubmit={e => this.props.addFoodHandler(e,this.state)}>
        <label for="name">Name</label>
        <input name="name" type="text" value={this.state.name} onChange={this.changeNameHandler}></input>
        <label for="img">Image</label>
        <input name="img" type="text" value={this.state.img} onChange={this.changeImageHandler}></input>
        <label for="calories">Calories</label>
        <input name="calories" type="text" value={this.state.calories} onChange={this.changeCaloriesHandler}></input>
        <button type="submit">Add</button>
        </form>      
      )
  }
  
}