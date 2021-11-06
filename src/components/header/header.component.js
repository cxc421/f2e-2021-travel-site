import logoSrc from "./logo.png";
import greenCircleSrc from "./green-circle-circle.png";
import yellowCircleSrc from "./yellow-rectangle-circle.png";
import redCircleSrc from "./red-triangle-circle.png";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        <img src={logoSrc} alt="logo" />
      </a>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a className={styles.redAnchor} href="/travel">
              <img src={redCircleSrc} alt="Red circle" />
              <span>台灣景點</span>
            </a>
          </li>
          <li>
            <a className={styles.yellowAnchor} href="/travel">
              <img src={yellowCircleSrc} alt="Yellow circle" />
              <span>美食住宿</span>
            </a>
          </li>
          <li>
            <a className={styles.greenAnchor} href="/travel">
              <img src={greenCircleSrc} alt="Green circle" />
              <span>景點交通</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
