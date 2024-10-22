import { useMarblesContext } from '../../context/marblesContext';
import { Button } from '../button';
import classes from './header.module.css';

export const Header = () => {
  const { boxes, addBox } = useMarblesContext();
  const marblesCount = boxes.reduce((acc, cur) => {
    return acc + cur.count;
  }, 0);

  return (
    <div className={classes.container}>
      <p className={classes.text}>
        Boxes: <span>{boxes.length}</span>
      </p>
      <p>
        Marbles: <span>{marblesCount}</span>
      </p>
      <Button action={addBox}>Add new box</Button>
    </div>
  );
};
