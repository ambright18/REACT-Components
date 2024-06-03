import { useRef } from "react";
import useFetch from "../Use_Fetch/UseFetch";

const ScrollTopBottom = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (error) {
    return <h1>An Error has happened... Try again...</h1>;
  }

  if (pending) {
    return <h1>Loading...Please Wait... </h1>;
  }

  return (
    <div>
      <h1>Alex's Scroll to Top and Bottom Feature using React</h1>
      <h3>This is the top Section</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom of the page.</h3>
    </div>
  );
};

export default ScrollTopBottom;
