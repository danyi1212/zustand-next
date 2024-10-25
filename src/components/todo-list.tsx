'use client'

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useTodos, useTodosStore} from "@/stores/useTodosStore";

export const TodoList = () => {
    const store = useTodosStore()
    const [todos, setTodos] = useTodos(state => state.todos);
    const [input, setInput] = useState("");

    const handleAdd = () => {
        // Update the store using the set function
        setTodos((state) => ({
            todos: [...state.todos, input]
        }));
    }

    const handleDelete = (index: number) => {
        // Or use the store functions directly
        store.setState(state => ({
            todos: state.todos.filter((_, i) => i !== index)
        }));
    };

    return (
        <ol className="flex flex-col space-y-4">
            {todos.map((todo, index) => (
                <li key={index} className="flex flex-row space-x-2 items-center">
                    <span className="text-lg flex-grow">#{index + 1} {todo}</span>
                    <Button
                        variant="destructive"
                        onClick={() => handleDelete(index)}>
                        Delete
                    </Button>
                </li>
            ))}
            <li className="flex w-full max-w-sm items-center space-x-2">
                <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new task"
                    className="text-lg"
                />
                <Button onClick={() => handleAdd()}>Add</Button>
            </li>
        </ol>
    )

}