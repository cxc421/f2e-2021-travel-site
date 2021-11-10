import { useState } from "react";
import { SelectBox, SelectOption } from "../selectbox/selectbox.component";

import logoSrc from "./images/logo.png";
import greenCircleSrc from "./images/green-circle-circle.png";
import yellowCircleSrc from "./images/yellow-rectangle-circle.png";
import redCircleSrc from "./images/red-triangle-circle.png";
import cardShadowSrc from "./images/card-shadow.png";
import searchIconSrc from "./images/search.png";
import gpsIconSrc from "./images/gps.png";
import styles from "./header.module.css";

function CategorySelectBox() {
  const [value, setValue] = useState(1);

  return (
    <SelectBox
      textWidth={61}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <SelectOption value={1}>類別</SelectOption>
      <SelectOption value={2}>景點</SelectOption>
      <SelectOption value={3}>活動</SelectOption>
    </SelectBox>
  );
}

function CitySelectBox() {
  const [value, setValue] = useState(1);
  const cityList = [
    { id: 0, text: "不分縣市" },
    { id: 1, text: "台北市" },
    { id: 2, text: "新北市" },
    { id: 3, text: "桃園市" },
    { id: 4, text: "台中市" },
    { id: 5, text: "台南市" },
    { id: 6, text: "高雄市" },
    { id: 7, text: "基隆市" },
    { id: 8, text: "新竹市" },
    { id: 9, text: "新竹縣" },
    { id: 10, text: "苗栗縣" },
    { id: 11, text: "彰化縣" },
    { id: 12, text: "南投縣" },
    { id: 13, text: "雲林縣" },
    { id: 14, text: "嘉義縣" },
    { id: 15, text: "嘉義市" },
    { id: 16, text: "屏東縣" },
    { id: 17, text: "宜蘭縣" },
    { id: 18, text: "花蓮縣" },
    { id: 19, text: "台東縣" },
    { id: 20, text: "金門縣" },
    { id: 21, text: "澎湖縣" },
    { id: 22, text: "連江縣" },
  ];

  return (
    <SelectBox
      textWidth={64}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      {cityList.map(({ id, text }) => (
        <SelectOption key={id} value={id}>
          {text}
        </SelectOption>
      ))}
    </SelectBox>
  );
}

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
            <img src={searchIconSrc} alt="to search page" />
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
              <img src={gpsIconSrc} alt="use gps location" />
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
