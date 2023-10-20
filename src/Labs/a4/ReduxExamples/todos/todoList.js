import React, { useState } from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"
import { useDispatch, useSelector } from "react-redux"


function TodoList() {
    const {todos} = useSelector((state) => state.todosReducer)

    return (
        <div>
            <h2>Todo List</h2>
            <ul className="list-group">
                <TodoForm/>
                {
                    todos.map((item) => (
                        <TodoItem todo = {item}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList