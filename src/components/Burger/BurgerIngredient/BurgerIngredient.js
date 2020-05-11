import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

// change from a func component to class to implement PropTypes
class BurgerIngredient extends Component {
  render () {
    let ingredient = null;

    switch ( this.props.type ) {
      case ( 'bread-bottom' ):
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case ( 'bread-top' ):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case ( 'meat' ):
        ingredient = <div className={classes.Meat}></div>;
        break;
      case ( 'cheese' ):
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case ( 'lettuce' ):
        ingredient = <div className={classes.Lettuce}></div>;
        break;
      case ( 'bacon' ):
        ingredient = <div className={classes.Bacon}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
};

// if tryig to use the Ingredient type, a string will be
// required in order to avoid receiving an error
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;