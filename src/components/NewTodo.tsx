import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text:string) => void }> = (props) => {
    const todoTextRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        
        const enterdText = todoTextRef.current!.value;

        if(enterdText.trim().length === 0) {return} ;


        props.onAddTodo(enterdText);
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="Todotext">Todo text</label>
            <input type="text" id="Todotext" ref={todoTextRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;