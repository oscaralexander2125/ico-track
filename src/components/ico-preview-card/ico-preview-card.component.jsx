import { Fragment } from "react";
import "./ico-preview-card.styles.scss";
import { Link } from "react-router-dom";

const IcoPreviewCard = ({ coin }) => {
  return (
    <Fragment>
      <img
        className="coin-image-preview-logo"
        src={`${coin.image}`}
        alt={`${coin.image} logo`}
      />
      <div className="coin-basic-preview-info-container">
        <div>{coin.name}</div>
        <div>Market Cap: {coin.market_cap.toLocaleString("en-us")}</div>
        <div>Price: ${coin.current_price}</div>
        <Link
          className="read-more-link"
          to={coin.id}
        >{`Click for More About ${coin.name}`}</Link>
      </div>
    </Fragment>
  );
};

export default IcoPreviewCard;
