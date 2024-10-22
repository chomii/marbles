import { PropsWithChildren } from 'react';

interface HoldButtonProps extends PropsWithChildren {
  clickAction: () => void;
}
export const HoldButton = ({ clickAction, children }: HoldButtonProps) => {
  return <button onClick={clickAction}>{children}</button>;
};
