import React, { useState } from 'react';
import styles from './form.module.css';
import TodoList from './TodoList';

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState({ name: "", done: false });
    

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({ name: "", done: false });
    }

    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
            <input className={styles.modernInput} onChange={(e) => setTodo({name:e.target.value, done: false})} value={todo.name} type="text" placeholder='Enter a ToDo item...'/>
            <button className={styles.button} type="submit">Add</button>
            </div>
        </form>
    );
}