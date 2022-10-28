import { createSignal } from "solid-js";

export function Counter(props) {
  const [count, setCount] = createSignal(props.count);

  return (
    <div>
      counter {count()}
      <button onClick={() => setCount(count() + 1)}>click</button>
    </div>
  );
}
