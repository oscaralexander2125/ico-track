import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCoins } from "../../store/metaCoins/metaCoins.selector";
import { useEffect } from "react";
import { setCurrentCoins } from "../../store/metaCoins/metaCoins.action";
import IcoPreviewCard from "../ico-preview-card/ico-preview-card.component";
import { Link } from "react-router-dom";

const CoinList = ({ metaVerseUrl }) => {
  const dispatch = useDispatch();
  const selectCoins = useSelector(selectCurrentCoins);

  useEffect(() => {
    fetch(metaVerseUrl)
      .then((res) => res.json())
      .then((response) => {
        dispatch(setCurrentCoins(response));
      })
      .catch((err) => console.log(err.message));
  }, [dispatch, metaVerseUrl]);

  const coinsList =
    selectCoins &&
    selectCoins.map((coin) => {
      return (
        <div key={coin.id}>
          <IcoPreviewCard coin={coin} />
          <Link
            className="read-more-link"
            to={coin.id}
          >{`Click for More About ${coin.name}`}</Link>
          <br />
        </div>
      );
    });

  return <div className="list-container">{coinsList}</div>;
};

export default CoinList;
