"use client";

import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Todo取得
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch("http://localhost:8080/todos");
    const data = await res.json();
    setTodos(data);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold text-center text-white mb-6">
        📋 Todo List
      </h1>

      {/* Todo一覧 */}
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-4 bg-gray-800 border border-gray-700 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center">
              <span className="text-lg font-medium text-white">
                {todo.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
