import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  addCoinToUserDb,
  getDocumentData,
} from "../../utils/firebase/firebase.utils";
import IcoCardInfo from "../../components/coin-card-info/ico-card-info.component";
import "./meta-coins-info.styles.scss";
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
    <div className="meta-coins-info-container">
      <IcoCardInfo />
      <button onClick={addToWatchList} className="add-to-watchlist-button">
        add to watch list
      </button>
      {isNotUserLoggedIn && (
        <div>Not signed in. Log In to build your watchist</div>
      )}
      {addToList && addedToWatchlist}
    </div>
  );
};

export default MetaCoinsInfo;
