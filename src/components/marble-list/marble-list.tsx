import { useMarblesContext } from '../../context/marblesContext';
import { HoldButton } from '../hold-button';
import classes from './marble-list.module.css';

export const MarbleList = () => {
  const { boxes, increment, decrement, removeBox } = useMarblesContext();

  if (!boxes.length) return null;

  return (
    <div className={classes.container}>
      {boxes.map((el, idx) => (
        <div key={idx} className={classes.box}>
          <div className={classes.inner}>
            <HoldButton clickAction={() => decrement(idx)}>-</HoldButton>
            {el.count}
            <HoldButton clickAction={() => increment(idx)}>+</HoldButton>
          </div>
          <button onClick={() => removeBox(idx)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
