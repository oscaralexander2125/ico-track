import { useNavigate, useParams } from "react-router-dom";
import {
  getDocumentData,
  removeCoinFromUserDb,
} from "../../utils/firebase/firebase.utils";
import IcoCardInfo from "../../components/coin-card-info/ico-card-info.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUserCoins } from "../../store/user/user.action";
import "./watchlist-coin-info.styles.scss";

const WatchListCoinInfo = () => {
  const selectUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ico } = useParams();

  const removeCoinFromWatchList = async () => {
    const removeCoinFromList = removeCoinFromUserDb(selectUser, ico);
    await removeCoinFromList;
    const getNewListOfCoins = await getDocumentData(selectUser);
    console.log("new list of coins", getNewListOfCoins);
    dispatch(setCurrentUserCoins(getNewListOfCoins.coins));
    navigate("/watchlist");
  };

  return (
    <div>
      <IcoCardInfo />
      <button className="remove-coin-button" onClick={removeCoinFromWatchList}>
        Remove from WatchList
      </button>
    </div>
  );
};

export default WatchListCoinInfo;
