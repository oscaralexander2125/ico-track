import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCoins } from "../../store/metaCoins/metaCoins.selector";
import { useEffect } from "react";
import { setCurrentCoins } from "../../store/metaCoins/metaCoins.action";
import IcoPreviewCard from "../ico-preview-card/ico-preview-card.component";
import { ListContainer, CoinContainer } from "./coin-list.styles.jsx";

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
        <CoinContainer key={coin.id}>
          <IcoPreviewCard coin={coin} />
        </CoinContainer>
      );
    });

  return <ListContainer>{coinsList}</ListContainer>;
};

export default CoinList;
