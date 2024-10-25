'use client'

import {create} from "@/zustand-next";


interface TodoStore {
    todos: string[]
}

const store = create<TodoStore>(() => ({
    todos: [
        "Learn React",
        "Learn Next.js",
        "Learn Zustand",
    ]
}))

export const useTodosStore = store.useStore;
export const useTodos = store.useState;
export const TodosStoreProvider = store.StoreProvider;
