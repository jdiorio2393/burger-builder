import React from 'react'
import classes from './burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredent'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_,i) => {
            return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        })
    })
    .reduce((finalArr, each) => {
        return finalArr.concat(each)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Start Adding Ingredients</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger