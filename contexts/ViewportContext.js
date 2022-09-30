import { useState, useEffect, createContext, useContext } from "react";

const StateContext = createContext();
const INITIAL_STATE = {
  width: null,
  height: null,
};

const ViewportContext = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResizing = () => {
    setWidth(window.innerWidth);
    setWidth(window.innerHeight);
    return { width, height };
  };

  useEffect(() => {
    let cleanUp = true;
    if (cleanUp) {
      window.addEventListener("resize", handleWindowResizing);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResizing);
      cleanUp = false;
    };
  }, []);

  return (
    <StateContext.Provider value={{ width, setWidth, height, setHeight }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
