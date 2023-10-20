"use client";

import React, {
  Fragment,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "./slider.module.css";

type SliderContext = {
  isOpen: boolean;
  handleOpen: () => void;
};

const SliderContext = createContext<SliderContext>({
  isOpen: false,
  handleOpen: () => {},
});

const Slider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <SliderContext.Provider value={{ isOpen, handleOpen }}>
      <div className={styles.slider}>{children}</div>
    </SliderContext.Provider>
  );
};

const SliderOverlay = () => {
  const { isOpen, handleOpen } = useContext(SliderContext);
  return (
    <div
      data-state={isOpen ? "open" : "close"}
      onClick={handleOpen}
      className={styles.slider__overlay}
    />
  );
};

const SliderTrigger = ({ children }: { children: React.ReactNode }) => {
  const { handleOpen } = useContext(SliderContext);
  return <button onClick={handleOpen}>{children}</button>;
};

const SliderClose = () => {
  const { isOpen, handleOpen } = useContext(SliderContext);
  return (
    <div
      data-state={isOpen ? "open" : "close"}
      className={styles.slider__close}
    >
      <button onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M36 12L12 36M12 12L36 36"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

const SliderHeader = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

const SliderContent = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useContext(SliderContext);
  const [isHidden, setIsHidden] = useState(isOpen);

  useEffect(() => {
    isOpen ? setIsHidden(isOpen) : setTimeout(() => setIsHidden(isOpen), 450);
  }, [isOpen]);

  return isHidden ? (
    <Fragment>
      <SliderOverlay />
      <SliderClose />
      <div
        data-state={isOpen ? "open" : "close"}
        className={styles.slider__content}
      >
        {children}
      </div>
    </Fragment>
  ) : null;
};
const SliderFooter = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export { Slider, SliderTrigger, SliderContent, SliderHeader, SliderFooter };
