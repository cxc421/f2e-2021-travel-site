import React from "react";
import styles from "./Selectbox.module.css";
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

function useMaxHeight(ref, showList) {
  const [maxHeight, setMaxHeight] = React.useState(40);

  React.useEffect(() => {
    if (showList) {
      if (ref && ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const viewHight = document.body.clientHeight;
        const optionHeight = 40;
        const maxDisplayOptionNum = Math.max(
          2,
          Math.floor((viewHight - top) / optionHeight) - 1
        );
        const maxHeight = maxDisplayOptionNum * optionHeight;
        setMaxHeight(maxHeight);
      }
    } else {
      setMaxHeight(40);
    }
  }, [ref, showList]);

  return maxHeight;
}

function SelectBox({ textWidth, value, onChange, children }) {
  const ref = React.useRef(null);
  const [showList, setShowList] = useShowList(ref);
  const maxHeight = useMaxHeight(ref, showList);
  const selectText =
    React.Children.toArray(children).find(
      (child) => child.props.value === value
    )?.props.children || "";
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
    <div ref={ref} className={styles.wrapper} style={{ maxHeight }}>
      <SelectContent.Provider value={contextValue}>
        {!showList ? (
          <>
            <SelectOption value={value}>{selectText}</SelectOption>
            <img
              className={styles.dropdownIcon}
              src={downIconSrc}
              alt="drop down"
              onMouseDown={() => setShowList(true)}
            />
          </>
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
    </div>
  );
}

export { SelectBox, SelectOption };
