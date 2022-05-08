import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  addCoinToUserDb,
  getDocumentData,
} from "../../utils/firebase/firebase.utils";
import CoinCardInfo from "../../components/coin-card-info/coin-card-info.component";
import {
  MetaCoinInfoContainer,
  AddToWatchlistButton,
} from "./meta-coins-info.styles.jsx";
import { useDispatch } from "react-redux";
import { setCurrentUserCoins } from "../../store/user/user.action";
import { useState } from "react";

const MetaCoinsInfo = () => {
  const { ico } = useParams();
  const [isNotUserLoggedIn, setNotUserLoggedIn] = useState(false);
  const [addToList, setAddToList] = useState(false);

  const selectUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const addedToWatchlist = <p>Added to Watchlist!</p>;
  const addToWatchList = async () => {
    if (!selectUser) {
      return setNotUserLoggedIn(true);
    }

    addCoinToUserDb(selectUser, ico);
    const newUserInfo = await getDocumentData(selectUser);
    dispatch(setCurrentUserCoins(newUserInfo.coins));
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
      {addToList && addedToWatchlist}
    </MetaCoinInfoContainer>
  );
};

export default MetaCoinsInfo;
