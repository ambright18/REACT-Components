import { useRef } from "react";

const ScrollToSection = () => {

    const ref = useRef();



  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "gray",
      },
    },
  ];

  const handleScrollToSection = () => {

    let position = ref.current.getBoundingClientRect().top;

    window.scrollTo({
        top: position,
        behavior: "smooth",
    })
  }


  return (
    <div>
      <h1>Scroll to specific section</h1>
      <button onClick={handleScrollToSection}>Click to Scroll</button>
      {data.map((dataItem, index) => (
        <div ref={index === 1 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
