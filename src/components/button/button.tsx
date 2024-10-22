import { PropsWithChildren } from 'react';
import classes from './button.module.css';

interface ButtonProps extends PropsWithChildren {
  action: () => void;
}

export const Button = ({ children, action }: ButtonProps) => {
  return (
    <button className={classes.button} onClick={action}>
      {children}
    </button>
  );
};
