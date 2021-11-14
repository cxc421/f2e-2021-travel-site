import { useRef, useState } from "react";
import isMobileCheck from "is-mobile";

import styles from "./HorizontalScroll.module.css";
import rightTriangleSrc from "./images/right-triangle.png";
import leftTriangleSrc from "./images/left-triangle.png";

const isDesktop = !isMobileCheck();

function HorizontalScroll({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState("left");
  const [isDragMode, setIsDragMode] = useState(false);
  const [mouseDownInfo, setMouseDownInfo] = useState({
    pageX: 0,
    scrollLeft: 0,
  });

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

  const handleContaineMouseMove = (e) => {
    if (isDesktop && isDragMode) {
      const xDiff = e.pageX - mouseDownInfo.pageX;
      ref.current.scrollLeft = mouseDownInfo.scrollLeft - xDiff;
    }
  };

  const enableDragMode = (e) => {
    if (isDesktop) {
      setMouseDownInfo({
        pageX: e.pageX,
        scrollLeft: ref.current.scrollLeft,
      });
      setIsDragMode(true);
    }
  };

  const disableDragMode = () => {
    if (isDesktop) {
      setIsDragMode(false);
    }
  };

  return (
    <div
      className={styles.container}
      onMouseDown={enableDragMode}
      onMouseMove={handleContaineMouseMove}
      onMouseLeave={disableDragMode}
      onMouseUp={disableDragMode}
    >
      <div className={styles.wrapper}>
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
