import UseWindowResize from "./WindowResize";

const UseWindowResizeTest = () => {
  const windowSize = UseWindowResize();
  const { width, height } = windowSize;

  return (
    <div>
      <h1>Alex's Window Resize Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
};

export default UseWindowResizeTest;
