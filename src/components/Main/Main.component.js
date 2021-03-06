import { HorizontalScroll } from "../HorizontalScroll/HorizontalScroll.component";

import styles from "./Main.module.css";
import upTriangleSrc from "./images/up-triangle.png";
import whiteGpsSrc from "./images/gps.png";
import taipeiBgSrc from "./images/taipei.png";
import newTaipeiBgSrc from "./images/new-taipei.png";
import taoyuanBgSrc from "./images/taoyuan.png";
import hsinchuBgSrc from "./images/hsinchu.png";
import taichungBgSrc from "./images/taichung.png";
import nantouBgSrc from "./images/nantou.png";
import chiayiBgSrc from "./images/chiayi.png";
import tainanBgSrc from "./images/tainan.png";
import kaohsiungBgSrc from "./images/kaohsiung.png";
import pingtungBgSrc from "./images/pingtung.png";
import yilanBgSrc from "./images/yilan.png";
import hualienBgSrc from "./images/hualien.png";
import taitungBgSrc from "./images/taitung.png";
import tpkmBgSrc from "./images/tpkm.png";

function SectionTitle({ children }) {
  return (
    <div className={styles.sectionTitle}>
      <img src={upTriangleSrc} alt="up triangle" />
      <span>{children}</span>
    </div>
  );
}

function SectionContent({ children, className, ...props }) {
  const finalClassName = className
    ? `${styles.sectionContent} ${className}`
    : styles.sectionContent;
  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
}

function HotCityCard({ bgUrl, children }) {
  const textStyle =
    children.length === 2 ? { letterSpacing: 10, marginRight: -5 } : undefined;

  return (
    <div className={styles.hotCityCard}>
      <div
        className={styles.hotCityCardBackground}
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className={styles.hotCityCardContent}>
          <img
            className={styles.hotCityCardGpsIcon}
            src={whiteGpsSrc}
            alt="gps"
          />
          <div style={textStyle} className={styles.hotCityCardText}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className={styles.container}>
      <section id="hot-city">
        <SectionTitle>????????????</SectionTitle>
        <HorizontalScroll>
          <div className={styles.hotCityArea}>
            <div>
              <HotCityCard bgUrl={taipeiBgSrc}>?????????</HotCityCard>
            </div>
            <div>
              <HotCityCard bgUrl={newTaipeiBgSrc}>?????????</HotCityCard>
              <HotCityCard bgUrl={taoyuanBgSrc}>?????????</HotCityCard>
            </div>
            <div>
              <HotCityCard bgUrl={hsinchuBgSrc}>?????????</HotCityCard>
            </div>
            <div>
              <HotCityCard bgUrl={taichungBgSrc}>??????</HotCityCard>
              <HotCityCard bgUrl={nantouBgSrc}>??????</HotCityCard>
            </div>
            <div>
              <HotCityCard bgUrl={chiayiBgSrc}>??????</HotCityCard>
            </div>
            <div>
              <HotCityCard bgUrl={tainanBgSrc}>??????</HotCityCard>
            </div>
            <div>
              <HotCityCard bgUrl={kaohsiungBgSrc}>??????</HotCityCard>
              <HotCityCard bgUrl={pingtungBgSrc}>??????</HotCityCard>
            </div>
            <div>
              <HotCityCard bgUrl={yilanBgSrc}>??????</HotCityCard>
            </div>
            <div>
              <HotCityCard bgUrl={hualienBgSrc}>??????</HotCityCard>
              <HotCityCard bgUrl={taitungBgSrc}>??????</HotCityCard>
            </div>
            <div>
              <HotCityCard bgUrl={tpkmBgSrc}>????????????.??????</HotCityCard>
            </div>
          </div>
        </HorizontalScroll>
      </section>
      {/* <section id="hot-activity">
        <SectionTitle>????????????</SectionTitle>
        <SectionContent
          style={{ height: 500, backgroundColor: "grey" }}
        ></SectionContent>
      </section>
      <section id="hot-foods">
        <SectionTitle>????????????</SectionTitle>
        <SectionContent
          style={{ height: 500, backgroundColor: "grey" }}
        ></SectionContent>
      </section> */}
    </div>
  );
}

export { Main };
