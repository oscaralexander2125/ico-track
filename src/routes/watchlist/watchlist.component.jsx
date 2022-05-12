import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoinList from "../../components/coin-list/coin-list.component";
import { fetchCoinsAsync } from "../../store/metaCoins/metaCoins.action";
import {
  selectCurrentUser,
  selectCurrentUserCoins,
} from "../../store/user/user.selector";
import { WatchlistContainer, WatchlistTitle } from "./watchlist.styles.jsx";

const urlComma = "%2c";
const urlSpace = "%20";

const WatchList = () => {
  const dispatch = useDispatch();
  const selectUser = useSelector(selectCurrentUser);
  const selectUserCoins = useSelector(selectCurrentUserCoins);
  let baseUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&ids=";

  const urlParameters = () => {
    return selectUserCoins.length
      ? selectUserCoins.join(urlComma + urlSpace)
      : null;
  };

  const param = urlParameters();
  const entireUrl = baseUrl + param;

  useEffect(() => {
    dispatch(fetchCoinsAsync(entireUrl));
  }, [dispatch, entireUrl]);

  return (
    <WatchlistContainer>
      {selectUser && selectUserCoins ? (
        <Fragment>
          <WatchlistTitle>My WatchList Coins</WatchlistTitle>
          <CoinList metaVerseUrl={entireUrl} />
        </Fragment>
      ) : (
        <div>Not signed in. Log in or register to add to your watchlist</div>
      )}
    </WatchlistContainer>
  );
};

export default WatchList;
