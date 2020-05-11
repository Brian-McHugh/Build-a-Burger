import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  // make the ingredients dynamic based on state in BurgerBuilder
  // create an array of the keys in the ingredients object
  // ['lettuce', 'bacon', 'cheese', 'meat']
  let transformedIngredients = Object.keys( props.ingredients )
    // map executes a func on each element in the array; igKey = 'lettuce', etc.
    .map(igKey => {
      // return a new array with a length of how many of each ingredient is included
      // the cheese array should have a length of two if two types of cheese were added
      return [...Array( props.ingredients[igKey] )].map( (_, index) => {
        // another map method to assign an id to each ingredient: cheese0, cheese1
        console.log(igKey);
        return <BurgerIngredient key={igKey + index} type={igKey} />
      });
    })
    // reduce transforms an array with two args: previous val, current val
    // reduce accepts a callback and an initial val, which here will be an empty array
    .reduce((array, element) => {
      // loop through all the elements and add them to the initial val, step by step
      return array.concat(element)
    }, []);
  // console.log(transformedIngredients);
  
  // give the user instructions if there are no ingredients yet
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  
  return (
    <div className={classes.Burger}>
         <BurgerIngredient type="bread-top" />
         {transformedIngredients}
         <BurgerIngredient type="bread-bottom" />         
    </div>
  );
};


export default burger;