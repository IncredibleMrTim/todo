import { ReactElement } from 'react';

interface AlertProps {
  title: string;
  message: string;
}

export const Alert = ({ message, title }: AlertProps): ReactElement => {
  return (
    <div className='rounded-md bg-red-300 text-black p-4 mt-4'>
      <div className='font-bold'>{title}</div>
      <div className='font-bold'>{message}</div>
    </div>
  );
};
