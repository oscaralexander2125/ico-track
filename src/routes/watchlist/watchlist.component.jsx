import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CoinList from "../../components/coin-list/coin-list.component";
import {
  selectCurrentUser,
  selectCurrentUserCoins,
} from "../../store/user/user.selector";
import "./watchlist.styles.scss";

const urlComma = "%2c";
const urlSpace = "%20";

const WatchList = () => {
  const selectUser = useSelector(selectCurrentUser);
  const selectUserCoins = useSelector(selectCurrentUserCoins);
  const baseUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&ids=";

  const urlParameters = () => {
    return selectUserCoins ? selectUserCoins.join(urlComma + urlSpace) : null;
  };
  const param = urlParameters();
  const entireUrl = baseUrl + param;

  return (
    <div>
      <div className="watchlist-container">
        {selectUser ? (
          <div>
            <h2>My WatchList Coins</h2>
            <CoinList metaVerseUrl={entireUrl} />
          </div>
        ) : (
          <div>not signed in. log in or register to add to your watchlist</div>
        )}
      </div>
    </div>
  );
};

export default WatchList;
