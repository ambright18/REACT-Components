import { useRef, useState } from "react";
import OutsideClick from "./OutsideClick";

const OutsideClickTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  OutsideClick(ref, ()=> setShowContent(false));

  return (
    <div ref={ref}>
      {showContent ? (
        <div>
          <h1>This is some random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content.
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default OutsideClickTest;
