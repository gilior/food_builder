import React from 'react'
import classes from './build-control-addition.module.css'
const BuildControl = (props) => 
    <div className={classes.BuildControl}>
        <div className={classes.label}>
            {props.label}
        </div>

        <button disabled={props.zero} onClick={props.on_rem} className={classes.Less}>less</button>
        <button onClick={props.on_add}  className={classes.More}>more</button>
    </div>


export default BuildControl