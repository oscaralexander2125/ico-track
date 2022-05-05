import "./icos.styles.scss";
import CoinList from "../../components/coin-list/coin-list.component";

const metaVerseUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=metaverse&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C%201y";

const ICOS = () => {
  return (
    <div className="icos-container">
      <h2 className="top-coins-meta">Top Meta Coins</h2>
      <CoinList metaVerseUrl={metaVerseUrl} />
    </div>
  );
};

export default ICOS;
