import locationIcon from "../assets/location.png";
import locationImage from "../assets/locationImage.png";

export const Travels = () => {
  const mountFuji =
    "https://www.google.com/maps/place/Mount+Fuji/@35.3606255,138.7273634,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipN0UpdkyHAkhhuxpTN6z11XVUCQJeeH9Yba-z3I!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipN0UpdkyHAkhhuxpTN6z11XVUCQJeeH9Yba-z3I%3Dw129-h86-k-no!7i3456!8i2304!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!5m1!1e4";
  return (
    <section>
      <div className="travel-wrapper">
        <img src={locationImage} alt="view of the travel" className="location-image" />
        <div className="travel-details">
          <div className="region">
            <img src={locationIcon} alt="location icon" className="location-icon"  />
            <p>JAPAN</p>
            <a href={mountFuji} target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </div>
          <h2 className="region-name">Mount Fuji</h2>
          <p className="region-date">12 Jan, 2021 - 24 Jan, 2021</p>
          <p className="region-info">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
    </section>
  );
};
