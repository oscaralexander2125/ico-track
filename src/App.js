import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import ICOS from "./routes/icos/icos.component";
import Navigation from "./routes/navigation/navigation.component";
import WatchList from "./routes/watchlist/watchlist.component";
import {
  createUserDocumentFromAuth,
  getDocumentData,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser, setCurrentUserCoins } from "./store/user/user.action";
import IcoCardInfo from "./routes/coin-card-info/ico-card-info.component";
import MetaCoinsInfo from "./routes/meta-coins-info/meta-coins-info.component";
import WatchListCoinInfo from "./routes/watchlist-coin-info/watchlist-coin-info.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const data = await getDocumentData(user);
      const newOjb = data
        ? { ...user, displayName: data.displayName, coins: data.coins }
        : user;

      dispatch(setCurrentUser(newOjb));
      
      if (data) {
        dispatch(setCurrentUserCoins(data.coins));
      } else {
        dispatch(setCurrentUserCoins([]));
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="icos" element={<ICOS />} />
        <Route path="icos/:ico" element={<MetaCoinsInfo />} />
        <Route path="watchlist/" element={<WatchList />} />
        <Route path="watchlist/:ico" element={<WatchListCoinInfo />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
