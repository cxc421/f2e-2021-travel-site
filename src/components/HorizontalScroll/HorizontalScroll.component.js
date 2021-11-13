import { useEffect, useRef, useState } from "react";
import styles from "./HorizontalScroll.module.css";
import rightTriangleSrc from "./images/right-triangle.png";

function HorizontalScroll({ children }) {
  const ref = useRef(null);

  const toRight = () => {
    if (ref && ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  const onScroll = (e) => {
    // console.log("scrolling");
    // const element = ref.current;
    // console.log(
    //   element.scrollWidth - element.scrollLeft === element.clientWidth
    // );
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} style={{ height: 245 }}>
        <div ref={ref} className={styles.content} onScroll={onScroll}>
          {children}
        </div>
      </div>
      <div className={styles.rightButton} onClick={toRight}>
        <img src={rightTriangleSrc} alt="right triangle" />
      </div>
    </div>
  );
}

export { HorizontalScroll };
