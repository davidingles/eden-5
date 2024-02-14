import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-row gap-2 flex-nowrap whitespace-nowrap">
        <p>{count}</p>
        <button className="bordeVerde w-[11px]" onClick={() => setCount(count + 1)}>+</button>
        <button className="bordeVerde w-[11px]" onClick={() => setCount(count - 1)}>-</button>
      </div>
    </>
  );
}

<style>
  button{
  }
</style>