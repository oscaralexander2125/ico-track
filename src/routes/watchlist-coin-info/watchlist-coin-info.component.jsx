import { useNavigate, useParams } from "react-router-dom";
import { removeCoinFromUserDb } from "../../utils/firebase/firebase.utils";
import CoinCardInfo from "../../components/coin-card-info/coin-card-info.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCoinsAsync } from "../../store/user/user.action";
import {
  WatchlistCoinInfoContainer,
  RemoveCoinButton,
} from "./watchlist-coin-info.styles.jsx";

const WatchListCoinInfo = () => {
  const selectUser = useSelector(selectCurrentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ico } = useParams();

  const removeCoinFromWatchList = async () => {
    await removeCoinFromUserDb(selectUser, ico);

    dispatch(fetchUserCoinsAsync(selectUser)).then(() =>
      navigate("/watchlist")
    );
  };

  return (
    <WatchlistCoinInfoContainer>
      <CoinCardInfo />
      <RemoveCoinButton onClick={removeCoinFromWatchList}>
        Remove from WatchList
      </RemoveCoinButton>
    </WatchlistCoinInfoContainer>
  );
};

export default WatchListCoinInfo;
