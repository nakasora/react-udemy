export const CountButton = ({ setCount }) => {
  const countUp = () => {
    setCount((count) => ++count);
  };
  const countDown = () => {
    setCount((count) => --count);
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};
