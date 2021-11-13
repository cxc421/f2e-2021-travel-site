import { HorizontalScroll } from "../HorizontalScroll/HorizontalScroll.component";

import styles from "./Main.module.css";
import upTriangleSrc from "./images/up-triangle.png";

function SectionTitle({ children }) {
  return (
    <div className={styles.sectionTitle}>
      <img src={upTriangleSrc} alt="up triangle" />
      <span>{children}</span>
    </div>
  );
}

function Main() {
  return (
    <div className={styles.container}>
      <section>
        <SectionTitle>熱門城市</SectionTitle>
        <HorizontalScroll>
          <div className={styles.testContent}></div>
        </HorizontalScroll>
      </section>
    </div>
  );
}

export { Main };
