import { TodoList } from "@/components/todo-list";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl">Zustand Next.js Example</h1>
        <TodoList />
      </main>
    </div>
  );
}
