import { SearchImg } from "../SearchIcon/SearchIcon.component";
import { GpsImage } from "../GpsIcon/GpsIcon.component";
import { CategorySelectBox } from "../CategorySelectbox/CategorySelectbox.component";
import { CitySelectBox } from "../CitySelectbox/CitySelectbox.component";

import styles from "./Banner.module.css";
import shadowSrc from "./images/card-shadow.png";
import bannerOneSrc from "./images/banner-1.png";
import welcomeSrc from "./images/welcome.png";

function Banner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div
          style={{
            backgroundImage: `url(${bannerOneSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className={styles.centerBlock}>
            <img
              className={styles.welcomIcon}
              src={welcomeSrc}
              alt="welcome to taiwan"
            />
            <div className={styles.slogan}>
              台北、台中、台南、屏東、宜蘭……遊遍台灣
            </div>
            <div className={styles.searchRow}>
              <input type="search" placeholder="搜尋關鍵字" />
              <SearchImg className={styles.searchIcon} />
            </div>
            <div className={styles.filterRow}>
              <div>
                <CategorySelectBox />
              </div>
              <div>
                <CitySelectBox />
              </div>
              <GpsImage className={styles.gpsIcon} />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.shadow} src={shadowSrc} alt="card shadow" />
    </div>
  );
}

export { Banner };
