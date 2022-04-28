import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  addCoinToUserDb,
  getDocumentData,
} from "../../utils/firebase/firebase.utils";
import IcoCardInfo from "../coin-card-info/ico-card-info.component";
import "./meta-coins-info.styles.scss";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.action";

const MetaCoinsInfo = () => {
  const { ico } = useParams();
  const selectUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const addToWatchList = async () => {
    if (!selectUser) return;
    addCoinToUserDb(selectUser, ico);
    const newUserInfo = await getDocumentData(selectUser);
    dispatch(setCurrentUser({...selectUser, coins: newUserInfo.coins}));
  };

  return (
    <div>
      <IcoCardInfo />
      <button onClick={addToWatchList} className="add-to-watchlist-button">
        add to watch list
      </button>
    </div>
  );
};

export default MetaCoinsInfo;
