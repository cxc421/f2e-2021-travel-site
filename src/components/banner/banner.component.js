import styles from "./banner.module.css";
import shadowSrc from "./images/card-shadow.png";

function Banner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <p></p>
        </div>
      </div>
      <img className={styles.shadow} src={shadowSrc} alt="card shadow" />
    </div>
  );
}

export { Banner };
