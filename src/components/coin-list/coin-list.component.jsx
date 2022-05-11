import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentCoins,
  selectLoading,
} from "../../store/metaCoins/metaCoins.selector";
import { Fragment, useEffect } from "react";
import { fetchCoinsAsync } from "../../store/metaCoins/metaCoins.action";
import IcoPreviewCard from "../ico-preview-card/ico-preview-card.component";
import { ListContainer, CoinContainer } from "./coin-list.styles.jsx";
import Spinner from "../spinner/spinner.component";

const CoinList = ({ metaVerseUrl }) => {
  //console.log(metaVerseUrl);
  const dispatch = useDispatch();
  const selectCoins = useSelector(selectCurrentCoins);
  const selectIsLoading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchCoinsAsync(metaVerseUrl));
  // }, [dispatch, metaVerseUrl]);

  const coinsList =
    selectCoins &&
    selectCoins.map((coin) => {
      return (
        <CoinContainer key={coin.id}>
          <IcoPreviewCard coin={coin} />
        </CoinContainer>
      );
    });
  return (
    <Fragment>
      {selectIsLoading ? (
        <Spinner />
      ) : (
        <ListContainer>{coinsList}</ListContainer>
      )}
    </Fragment>
  );
};

export default CoinList;
