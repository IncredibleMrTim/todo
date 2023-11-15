import { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { Alert } from './components/Alert';
import { type Todo, TodoItem } from './components/TodoItem';

import './index.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasError(false);

    const target = e.target as typeof e.target & {
      todoInput: { value: string };
    };

    if (todos.find(t => t.text === target.todoInput.value && !t.isCompleted)) {
      setHasError(true);
      return;
    }

    const text = target.todoInput.value;
    const newTodo = {
      id: Math.random(),
      text,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);

    target.todoInput.value = '';
  };

  const completeTodo = (id: number) => {
    setTodos(
      todos?.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: true,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos?.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <div className='w-1/3 border-2 border-sky-300 p-2'>
        <TodoForm handleSubmit={handleSubmit} />
        <div className='mt-5'>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleCompleteTodo={completeTodo}
              handleRemoveTodo={removeTodo}
            />
          ))}
        </div>
        {hasError && <Alert message='Todo already exists' title='Error' />}
      </div>
    </div>
  );
}

export default App;
