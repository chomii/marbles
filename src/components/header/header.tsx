import { useMarblesContext } from '../../hooks/useMarbles';
import { Button } from '../button';
import classes from './header.module.css';

export const Header = () => {
  const { boxes, addBox } = useMarblesContext();
  const marblesCount = boxes.reduce((acc, cur) => {
    return acc + cur.count;
  }, 0);

  return (
    <div className={classes.container}>
      <div className={classes.textBox}>
        <p>
          Boxes: <span>{boxes.length}</span>
        </p>
      </div>
      <div className={classes.textBox}>
        <p>
          Marbles: <span>{marblesCount}</span>
        </p>
      </div>
      <Button action={addBox}>Add new box</Button>
    </div>
  );
};
