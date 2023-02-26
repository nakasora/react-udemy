import { useState } from "react";
import { CountResult } from "./state/CountResult";
import { CountButton } from "./state/CountButton";

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountResult title="カウント" count={count} />
      <CountButton setCount={setCount} />
    </>
  );
};

export default Example;
