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
  const [showList, setShowList] = useShowList(ref);
  const selectText = React.Children.toArray(children).find(
    (child) => child.props.value === value
  )?.props.children;
  const contextValue = {
    value,
    textWidth,
    showList,
    handleOptionMouseDown(optionValue) {
      setShowList((show) => !show);
      if (optionValue !== value) {
        onChange(optionValue);
      }
    },
  };

  return (
    <div ref={ref} className={styles.wrapper}>
      <SelectContent.Provider value={contextValue}>
        {!showList ? (
          <SelectOption value={value}>{selectText}</SelectOption>
        ) : (
          children
        )}
      </SelectContent.Provider>
    </div>
  );
}

function SelectOption({ value: optionValue, children }) {
  const { value, textWidth, showList, handleOptionMouseDown } =
    useSelectContent();
  const optionCalssName = [styles.option, showList ? styles.inList : undefined]
    .filter((className) => typeof className === "string")
    .join(" ");

  return (
    <div
      className={optionCalssName}
      data-selected={value === optionValue}
      onMouseDown={() => handleOptionMouseDown(optionValue)}
    >
      <div style={{ width: textWidth }} className={styles.optionText}>
        {children.split("").map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </div>
      <img src={downIconSrc} alt="drop down" />
    </div>
  );
}

export { SelectBox, SelectOption };
