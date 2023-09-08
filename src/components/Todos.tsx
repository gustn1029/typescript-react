import React from 'react';
import Todo from '../models/todo';
import TodosItem from './TodosItem';
import classes from './Todos.module.css';

const Todos: React.FC<{items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map(item => (
                <TodosItem key={item.id} item={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
            ))}
        </ul>
    )
}

export default Todos;