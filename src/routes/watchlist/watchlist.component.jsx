import { useSelector } from "react-redux";
import CoinList from "../../components/coin-list/coin-list.component";
import {
  selectCurrentUser,
  selectCurrentUserCoins,
} from "../../store/user/user.selector";
import { WatchlistContainer, WatchlistTitle } from "./watchlist.styles.jsx";

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
    <WatchlistContainer>
      {selectUser ? (
        <>
          <WatchlistTitle>My WatchList Coins</WatchlistTitle>
          <CoinList metaVerseUrl={entireUrl} />
        </>
      ) : (
        <div>not signed in. log in or register to add to your watchlist</div>
      )}
    </WatchlistContainer>
  );
};

export default WatchList;
