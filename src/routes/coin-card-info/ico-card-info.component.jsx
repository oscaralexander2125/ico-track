import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCoinInfo } from "../../store/coin-info/coin-info.action";
import { selectCoinInfo } from "../../store/coin-info/coin-info.selector";
import "./ico-card-info.styles.scss";

const IcoCardInfo = () => {
  const { ico } = useParams();
  const url = "https://api.coingecko.com/api/v3/coins/";
  const urlWithId = url + ico;
  const dispatch = useDispatch();
  const selectCoin = useSelector(selectCoinInfo);

  useEffect(() => {
    fetch(urlWithId)
      .then((res) => res.json())
      .then((ico) => {
        dispatch(setCoinInfo(ico));
      })
      .catch((err) => console.log(err));
  }, [dispatch, urlWithId]);

  return (
    <div className="coin-info-container">
      {Object.keys(selectCoin).length !== 0 && (
        <div>
          <h2>{selectCoin.name}</h2>
          <div>
            Twitter followers:{" "}
            {selectCoin["community_data"]["twitter_followers"].toLocaleString(
              "en-us"
            )}
          </div>
          <div>Community Score: {selectCoin["community_score"]}</div>
          <div>Developer Score: {selectCoin["developer_score"]}</div>
          <div className="platform">{selectCoin["asset_platform_id"]}</div>
          <div>What is {selectCoin.name}?</div>
          <p>
            {selectCoin.description["en"].length < 600
              ? selectCoin.description["en"]
              : selectCoin.description["en"].substring(0, 600) +
                "... go to website for more info"}
          </p>
          <div>

            Website:{" "}
            {
              <a href={selectCoin.links["homepage"][0]}>
                {selectCoin.links['homepage'][0]}
              </a>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default IcoCardInfo;
