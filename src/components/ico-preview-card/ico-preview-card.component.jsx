import { Fragment } from "react";
import {
  CoinImagePreviewLogo,
  CoinPreviewInfoContainer,
  ReadMoreLink,
} from "./ico-preview-card.styles.jsx";

const IcoPreviewCard = ({ coin }) => {
  return (
    <Fragment>
      <CoinImagePreviewLogo src={`${coin.image}`} alt={`${coin.image} logo`} />
      <CoinPreviewInfoContainer>
        <div>{coin.name}</div>
        <div>Market Cap: {coin.market_cap.toLocaleString("en-us")}</div>
        <div>Price: ${coin.current_price}</div>
        <ReadMoreLink
          to={coin.id}
        >{`Click for More Info About ${coin.name}`}</ReadMoreLink>
      </CoinPreviewInfoContainer>
    </Fragment>
  );
};

export default IcoPreviewCard;
