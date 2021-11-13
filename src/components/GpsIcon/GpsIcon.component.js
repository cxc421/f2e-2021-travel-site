import gpsIconSrc from "./images/gps.png";

function GpsImage(props) {
  return <img src={gpsIconSrc} alt="use gps location" {...props} />;
}

export { GpsImage };
