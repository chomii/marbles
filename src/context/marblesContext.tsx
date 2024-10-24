import { createContext, PropsWithChildren, useState } from 'react';

interface Box {
  count: number;
}

interface MarblesProviderInterface {
  boxes: Box[];
  addBox: () => void;
  removeBox: (idx: number) => void;
  increment: (idx: number) => void;
  decrement: (idx: number) => void;
}

export const MarblesContext = createContext<MarblesProviderInterface>(
  {} as MarblesProviderInterface
);

export const MarblesProvider = ({ children }: PropsWithChildren) => {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const addBox = () => setBoxes((prev) => [...prev, { count: 0 }]);
  const removeBox = (idx: number) => setBoxes((prev) => prev.filter((el, index) => index !== idx));
  const increment = (idx: number) => {
    setBoxes((prev) => {
      return prev.map((el, index) => {
        if (idx === index) {
          return {
            count: el.count + 1,
          };
        }
        return el;
      });
    });
  };
  const decrement = (idx: number) => {
    setBoxes((prev) => {
      return prev.map((el, index) => {
        if (idx === index && el.count >= 1) {
          return {
            count: el.count - 1,
          };
        }
        return el;
      });
    });
  };
  return (
    <MarblesContext.Provider value={{ boxes, addBox, removeBox, increment, decrement }}>
      {children}
    </MarblesContext.Provider>
  );
};
