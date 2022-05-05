import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCoins } from "../../store/metaCoins/metaCoins.selector";
import { useEffect } from "react";
import { setCurrentCoins } from "../../store/metaCoins/metaCoins.action";
import IcoPreviewCard from "../ico-preview-card/ico-preview-card.component";
import { Link } from "react-router-dom";
import "./coin-list.styles.scss";

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
        <div className={`${coin.id} coin-container`} key={coin.id}>
          <IcoPreviewCard coin={coin} />
        </div>
      );
    });

  return <div className="list-container">{coinsList}</div>;
};

export default CoinList;
