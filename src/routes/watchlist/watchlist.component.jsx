import { Link } from "react-router-dom";
import IcoCard from "../../components/ico-preview-card/ico-preview-card.component";

const WatchList = () => {
  return (
    <div>
      I'm WatchList page
      <div>
        <Link to="decentraland">link to one ico on watchlist</Link>
      </div>
    </div>
  );
};

export default WatchList;
