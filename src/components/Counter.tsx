import { memo } from "react";

interface CounterProps {
  increment: () => void;
}

export const Counter = memo(({ increment }: CounterProps) => {
  console.log("Rendering Counter");
  return <button onClick={increment}>Increment</button>;
});
