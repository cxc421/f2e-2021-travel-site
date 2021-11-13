import { SearchImg } from "../SearchIcon/SearchIcon.component";
import { GpsImage } from "../GpsIcon/GpsIcon.component";
import { CategorySelectBox } from "../CategorySelectbox/CategorySelectbox.component";
import { CitySelectBox } from "../CitySelectbox/CitySelectbox.component";

import logoSrc from "./images/logo.png";
import greenCircleSrc from "./images/green-circle-circle.png";
import yellowCircleSrc from "./images/yellow-rectangle-circle.png";
import redCircleSrc from "./images/red-triangle-circle.png";
import cardShadowSrc from "./images/card-shadow.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.placeHolder} />
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <a className={styles.logo} href="/">
            <img src={logoSrc} alt="logo" />
          </a>
          <nav className={styles.navbar}>
            <ul>
              <li>
                <a className={styles.redText} href="/travel">
                  <img src={redCircleSrc} alt="Red circle" />
                  <span>台灣景點</span>
                </a>
              </li>
              <li>
                <a className={styles.yellowText} href="/travel">
                  <img src={yellowCircleSrc} alt="Yellow circle" />
                  <span>美食住宿</span>
                </a>
              </li>
              <li>
                <a className={styles.greenText} href="/travel">
                  <img src={greenCircleSrc} alt="Green circle" />
                  <span>景點交通</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.headerContentSmall}>
          <a className={styles.logoSmall} href="/">
            <img src={logoSrc} alt="logo" />
          </a>
          <a className={styles.searchIconSmall} href="/search">
            <SearchImg />
          </a>
          <nav className={styles.navbarSmall}>
            <ul>
              <li>
                <a className={styles.selected} href="/activity">
                  景點活動
                </a>
              </li>
              <li>
                <a href="/location">美食住宿</a>
              </li>
              <li>
                <a href="/comminication">景點交通</a>
              </li>
            </ul>
          </nav>
          <div className={styles.filterAreaSmall}>
            <div>
              <CategorySelectBox />
            </div>
            <div>
              <CitySelectBox />
            </div>
            <a className={styles.gpsIconSmall} href="/gps">
              <GpsImage />
            </a>
          </div>
        </div>
      </header>
      <img
        src={cardShadowSrc}
        className={styles.cardShadow}
        alt="card shadow"
      />
    </>
  );
}

export { Header };
