import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import ICOS from "./routes/icos/icos.component";
import Navigation from "./routes/navigation/navigation.component";
import WatchList from "./routes/watchlist/watchlist.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="icos" element={<ICOS />} />
        <Route path="watchlist" element={<WatchList />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
