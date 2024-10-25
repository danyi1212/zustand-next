'use client'

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export const TodoList = () => {
    const [todos, setTodos] = useState<string[]>([
        "Learn React",
        "Learn Next.js",
        "Learn Zustand",
    ]);
    const [input, setInput] = useState("");

    const handleAdd = () => {
        setTodos((prev) => [...prev, input]);
    }

    const handleDelete = (index: number) => {
        setTodos((prev) => prev.filter((_, i) => i !== index));
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