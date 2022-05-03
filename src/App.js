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
import MetaCoinsInfo from "./routes/meta-coins-info/meta-coins-info.component";
import WatchListCoinInfo from "./routes/watchlist-coin-info/watchlist-coin-info.component";
import { setCurrentCoins } from "./store/metaCoins/metaCoins.action";
import Home from "./routes/home/home.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const data = await getDocumentData(user);
      console.log(data);
      const newOjb = data ? { ...user, displayName: data.displayName } : user;

      dispatch(setCurrentUser(newOjb));

      if (data) {
        dispatch(setCurrentUserCoins(data.coins));
      } else {
        dispatch(setCurrentUserCoins([]));
        dispatch(setCurrentCoins([]));
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/icos" element={<ICOS />} />
        <Route path="/icos/:ico" element={<MetaCoinsInfo />} />
        <Route path="/watchlist/" element={<WatchList />} />
        <Route path="/watchlist/:ico" element={<WatchListCoinInfo />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
