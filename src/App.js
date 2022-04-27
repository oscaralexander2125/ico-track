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
import { setCurrentUser } from "./store/user/user.action";
import IcoCardInfo from "./routes/coin-card-info/ico-card-info.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const data = await getDocumentData(user);
      const newOjb = data ? { ...user, displayName: data.displayName } : user;

      dispatch(setCurrentUser(newOjb));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="icos" element={<ICOS />} />
        <Route path="icos/:ico" element={<IcoCardInfo />} />
        <Route path="watchlist/" element={<WatchList />} />
        <Route path="watchlist/:ico" element={<IcoCardInfo />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
