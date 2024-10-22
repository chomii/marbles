import { useState, useRef } from 'react';

export default function useLongPress(onClick: () => void) {
  const [action, setAction] = useState<'longpress' | 'click'>();

  const timerRef = useRef<number>();
  const isLongPress = useRef<boolean>(false);

  function startPressTimer() {
    isLongPress.current = false;
    timerRef.current = setInterval(() => {
      isLongPress.current = true;
      setAction('longpress');
      onClick();
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
  }

  function handleOnTouchStart() {
    startPressTimer();
  }

  function handleOnTouchEnd() {
    if (action === 'longpress') return;
    clearTimeout(timerRef.current);
  }

  return {
    action,
    handlers: {
      onClick: handleOnClick,
      onMouseDown: handleOnMouseDown,
      onMouseUp: handleOnMouseUp,
      onTouchStart: handleOnTouchStart,
      onTouchEnd: handleOnTouchEnd,
    },
  };
}
