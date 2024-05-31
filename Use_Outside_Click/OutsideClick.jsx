import { useEffect } from "react";

const OutsideClick = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);



    return ()=>{
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
    }
  }, [handler, ref]);
};

export default OutsideClick;
