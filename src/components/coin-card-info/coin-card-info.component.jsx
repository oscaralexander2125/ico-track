import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoinInfoAsync } from "../../store/coin-info/coin-info.action";
import {
  selectCoinInfo,
  selectIsLoadingState,
} from "../../store/coin-info/coin-info.selector";
import {
  CoinInfo,
  Platform,
  WebsiteLinkColor,
} from "./coin-card-info.styles.jsx";
import Description from "../description/description.component";
import Spinner from "../spinner/spinner.component";

const CoinCardInfo = () => {
  const { ico } = useParams();
  const url = "https://api.coingecko.com/api/v3/coins/";
  const urlWithId = url + ico;
  const dispatch = useDispatch();
  const selectCoin = useSelector(selectCoinInfo);
  const selectLoading = useSelector(selectIsLoadingState);

  useEffect(() => {
    dispatch(fetchCoinInfoAsync(urlWithId));
  }, [dispatch, urlWithId]);

  return (
    <Fragment>
      {selectLoading ? (
        <Spinner />
      ) : (
        Object.keys(selectCoin).length !== 0 && (
          <div className="coin-info-container">
            <CoinInfo>
              <img
                alt={`${selectCoin.name} coin logo`}
                src={selectCoin.image.thumb}
              />
              <h2>{selectCoin.name}</h2>
              <div>
                Twitter followers:{" "}
                {selectCoin["community_data"][
                  "twitter_followers"
                ].toLocaleString("en-us")}
              </div>
              <div>Community Score: {selectCoin["community_score"]}</div>
              <div>Developer Score: {selectCoin["developer_score"]}</div>
              <Platform>Platform: {selectCoin["asset_platform_id"]}</Platform>
            </CoinInfo>
            <div>What is {selectCoin.name}?</div>
            <Description description={selectCoin.description["en"]} />
            <WebsiteLinkColor>
              Website:{" "}
              {<a href={selectCoin.links["homepage"][0]}>{selectCoin.name}</a>}
            </WebsiteLinkColor>
          </div>
        )
      )}
    </Fragment>
  );
};

export default CoinCardInfo;
