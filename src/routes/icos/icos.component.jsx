import { TopMetaCoinsTitle, CoinsContainer } from "./icos.styles.jsx";
import CoinList from "../../components/coin-list/coin-list.component";

const metaVerseUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=metaverse&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C%201y";

const ICOS = () => {
  return (
    <CoinsContainer>
      <TopMetaCoinsTitle>Top Meta Coins</TopMetaCoinsTitle>
      <CoinList metaVerseUrl={metaVerseUrl} />
    </CoinsContainer>
  );
};

export default ICOS;
