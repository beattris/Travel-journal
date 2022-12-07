import locationIcon from "../assets/location.png";

export const Travels = (props) => {
  return (
    <section>
      <div className="travel-wrapper">
        <img src={props.image} alt="view of the travel" className="location-image" />
        <div className="travel-details">
          <div className="region">
            <img src={locationIcon} alt="location icon" className="location-icon"  />
            <p>{props.location.toUpperCase()}</p>
            <a href={props.map} target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </div>
          <h2 className="region-name">{props.title}</h2>
          <p className="region-date">{props.startDate} - {props.endDate}</p>
          <p className="region-info">{props.description}</p>
        </div>
      </div>
    </section>
  );
};
