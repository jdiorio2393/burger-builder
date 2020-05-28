import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
 <div className={classes.BuildControls}>
     <p>current price: <strong>{props.price.toFixed(2)}</strong></p>
     {controls.map(element => (
         <BuildControl 
         added={() => props.ingredientAdded(element.type)} 
         key={element.label} 
         label={element.label}
         removed={() => props.ingredientRemoved(element.type)}
         disabled={props.disabled[element.type]}
         />
     ))}
     <button 
     className={classes.OrderButton}
     disabled={!props.purchasable}
     onClick={props.ordered}>ORDER NOW</button>
 </div>
)

export default buildControls