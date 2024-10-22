import { PropsWithChildren } from 'react';
import useLongPress from '../../hooks/useLongPressHook';

interface HoldButtonProps extends PropsWithChildren {
  clickAction: () => void;
}
export const HoldButton = ({ clickAction, children }: HoldButtonProps) => {
  const { handlers } = useLongPress(clickAction);
  return <button {...handlers}>{children}</button>;
};
