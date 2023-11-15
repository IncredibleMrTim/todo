export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

interface TodoItemProps {
  todo: Todo;
  handleRemoveTodo: (id: number) => void;
  handleCompleteTodo: (id: number) => void;
}

export const TodoItem = ({
  todo,
  handleRemoveTodo,
  handleCompleteTodo,
}: TodoItemProps) => {
  return (
    <div>
      <ul className='border-b-2'>
        <li className='bg-sky-50 p-2'>
          <div className='flex justify-between items-center'>
            <span
              className={`${todo.isCompleted && 'text-green-600 line-through'}`}
            >
              {todo.text}
            </span>
            <div>
              <button
                className='mr-2'
                onClick={() => handleCompleteTodo(todo.id)}
              >
                Complete
              </button>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
