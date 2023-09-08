import React from 'react';
import Todo from "../models/todo";
import classes from './TodosItem.module.css'

const TodosItem: React.FC<{item: string; onRemoveTodo: ()=> void}> = (props) => {
    return (
            <li className={classes.item} onClick={props.onRemoveTodo}>{props.item}</li>
    )
}

export default TodosItem;