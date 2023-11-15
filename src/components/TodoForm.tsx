interface TodoFormProps {
  handleSubmit: (e: React.FormEvent) => void;
}

export const TodoForm = ({ handleSubmit }: TodoFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex justify-between items-center'>
        <input type='text' name='todoInput' />
        <button type='submit'>Add Todo</button>
      </div>
    </form>
  );
};
