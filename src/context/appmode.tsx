import React, {
  useState,
  useEffect,
  ChangeEvent,
  createContext,
  ReactNode,
} from "react";

export const AppContext = createContext({
  isChecked: false,
  isBallOnRight: false,
  toggleCheckbox: (event: ChangeEvent<HTMLInputElement>) => {},
});

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("isChecked") === "true"
  );
  const [isBallOnRight, setIsBallOnRight] = useState(
    localStorage.getItem("isBallOnRight") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isChecked", isChecked.toString());
    localStorage.setItem("isBallOnRight", isBallOnRight.toString());
    document.body.classList.toggle("light-mode", isChecked);
  }, [isChecked, isBallOnRight]);

  const toggleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    setIsBallOnRight((prevIsBallOnRight) => !prevIsBallOnRight);
  };

  return (
    <AppContext.Provider value={{ isChecked, isBallOnRight, toggleCheckbox }}>
      {children}
    </AppContext.Provider>
  );
};
