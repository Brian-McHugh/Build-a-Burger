import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
}

class BurgerBuilder extends Component {
  // no longer necessary
  // constructor(props) {
  //   super(props);
  //   this.state = {...};

  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    // base price before toppings
    totalPrice: 4
  }
 
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    // use the spread operator to distribute the old ingredients
    // properties into a new const called updatedIngredients
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const additionalPrice = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + additionalPrice;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    // if there's nothing to remove, simply return and end the func
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    // use the spread operator to distribute the old ingredients
    // properties into a new const called updatedIngredients
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const reducedPrice = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - reducedPrice;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  render () {
    // disable the remove button if there's nothing to remove
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <=0
    };
    // {lettuce: true, meat: false, ...}
    return (
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice} />
        </Aux>
    );
  }
}

export default BurgerBuilder;