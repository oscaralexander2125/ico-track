import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  loadingState,
  selectCurrentUser,
} from "../../store/user/user.selector";
import { addCoinToUserDb } from "../../utils/firebase/firebase.utils";
import CoinCardInfo from "../../components/coin-card-info/coin-card-info.component";
import {
  MetaCoinInfoContainer,
  AddToWatchlistButton,
} from "./meta-coins-info.styles.jsx";
import { useDispatch } from "react-redux";
import { fetchUserCoinsAsync } from "../../store/user/user.action";
import { useState } from "react";


const MetaCoinsInfo = () => {
  const { ico } = useParams();
  const [isNotUserLoggedIn, setNotUserLoggedIn] = useState(false);
  const [addToList, setAddToList] = useState(false);

  const selectUser = useSelector(selectCurrentUser);
  const loading = useSelector(loadingState);
  const dispatch = useDispatch();
  const addedToWatchlist = <p>Added to Watchlist!</p>;
  const addToWatchList = async () => {
    if (!selectUser) {
      return setNotUserLoggedIn(true);
    }

    await addCoinToUserDb(selectUser, ico);

    dispatch(fetchUserCoinsAsync(selectUser));
    setAddToList(true);
  };

  return (
    <MetaCoinInfoContainer>
      <CoinCardInfo />
      <AddToWatchlistButton onClick={addToWatchList}>
        add to watch list
      </AddToWatchlistButton>
      {isNotUserLoggedIn && (
        <div>Not signed in. Log In to build your watchist</div>
      )}
      {loading && <div>Adding...</div>}
      {!loading && addToList && addedToWatchlist}
    </MetaCoinInfoContainer>
  );
};

export default MetaCoinsInfo;
