import React from "react";
import styles from "./selectbox.module.css";
import downIconSrc from "./images/dropdown.png";

const SelectContent = React.createContext();
SelectContent.displayName = "SelectContent";

function useSelectContent() {
  const value = React.useContext(SelectContent);
  if (!value) {
    throw new Error(`userSelectContent() must be used within SelectBox`);
  }
  return value;
}

function useShowList(ref) {
  const [showList, setShowList] = React.useState(false);

  React.useEffect(() => {
    if (showList) {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowList(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside, true);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside, true);
      };
    }
  }, [ref, showList]);

  return [showList, setShowList];
}

function SelectBox({ textWidth, value, onChange, children }) {
  const ref = React.useRef(null);
  const [selectText, setSelectText] = React.useState("");
  const [showList, setShowList] = useShowList(ref);
  const contextValue = {
    textWidth,
  };

  // return (
  //   <SelectContent.Provider value={{ selectValue: value, setSelectText }}>
  //     <div ref={ref} className={styles.wrapper}>
  //       {children}
  //     </div>
  //   </SelectContent.Provider>
  // );
  if (!showList) {
    return (
      <div ref={ref} className={styles.wrapper}>
        <SelectOption value={1}>類別1</SelectOption>
        <SelectOption value={2}>類別2</SelectOption>
        <SelectOption value={3}>類別3</SelectOption>
      </div>
    );
  }
  return null;
}

function SelectOption({ value, children }) {
  return (
    <div className={styles.option} data-selected={value === 2}>
      <div className={styles.optionText}>
        {children.split("").map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </div>
      <img src={downIconSrc} alt="drop down" />
    </div>
  );
}

export { SelectBox, SelectOption };
