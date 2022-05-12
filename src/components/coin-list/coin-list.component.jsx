import { useSelector } from "react-redux";
import {
  selectCurrentCoins,
  selectLoading,
} from "../../store/metaCoins/metaCoins.selector";
import { Fragment } from "react";

import IcoPreviewCard from "../ico-preview-card/ico-preview-card.component";
import { ListContainer, CoinContainer } from "./coin-list.styles.jsx";
import Spinner from "../spinner/spinner.component";

const CoinList = () => {
  const selectCoins = useSelector(selectCurrentCoins);
  const selectIsLoading = useSelector(selectLoading);

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
