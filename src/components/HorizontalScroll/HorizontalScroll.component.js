import { useRef, useState } from "react";
import styles from "./HorizontalScroll.module.css";
import rightTriangleSrc from "./images/right-triangle.png";
import leftTriangleSrc from "./images/left-triangle.png";

function HorizontalScroll({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState("left");

  const toRight = () => {
    if (ref && ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  const toLeft = () => {
    if (ref && ref.current) {
      ref.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const onScroll = (e) => {
    // console.log("scrolling");
    const element = ref.current;

    if (element.scrollLeft === 0) {
      setPosition("left");
    } else if (
      element.scrollWidth - element.scrollLeft ===
      element.clientWidth
    ) {
      setPosition("right");
    } else {
      setPosition("middle");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} style={{ height: 245 }}>
        <div ref={ref} className={styles.content} onScroll={onScroll}>
          {children}
        </div>
      </div>
      {position !== "right" && (
        <div className={styles.rightButton} onClick={toRight}>
          <img src={rightTriangleSrc} alt="right triangle" />
        </div>
      )}
      {position !== "left" && (
        <div className={styles.leftButton} onClick={toLeft}>
          <img src={leftTriangleSrc} alt="left triangle" />
        </div>
      )}
    </div>
  );
}

export { HorizontalScroll };
