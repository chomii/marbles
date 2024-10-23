import { useState, useRef } from 'react';

export default function useLongPress(onClick: () => void) {
  const [action, setAction] = useState<'longpress' | 'click'>();

  const timerRef = useRef<number>();
  const intervalRef = useRef<number>();
  const isLongPress = useRef<boolean>(false);

  function startPressTimer() {
    isLongPress.current = false;
    timerRef.current = setTimeout(() => {
      isLongPress.current = true;
      setAction('longpress');
      onClick();
      intervalRef.current = setInterval(() => onClick(), 100);
    }, 500);
  }

  function handleOnClick() {
    if (isLongPress.current) {
      return;
    }
    setAction('click');
    onClick();
  }

  function handleOnMouseDown() {
    startPressTimer();
  }

  function handleOnMouseUp() {
    clearTimeout(timerRef.current);
    clearInterval(intervalRef.current);
  }

  // function handleOnTouchStart() {
  //   startPressTimer();
  // }

  // function handleOnTouchEnd() {
  //   if (action === 'longpress') return;
  //   clearTimeout(timerRef.current);
  //   clearInterval(intervalRef.current);
  // }

  return {
    action,
    handlers: {
      onClick: handleOnClick,
      onMouseDown: handleOnMouseDown,
      onMouseUp: handleOnMouseUp,
      // onTouchStart: handleOnTouchStart,
      // onTouchEnd: handleOnTouchEnd,
    },
  };
}
