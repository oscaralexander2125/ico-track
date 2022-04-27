import IcoCard from "../../components/ico-preview-card/ico-preview-card.component";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCoins } from "../../store/metaCoins/metaCoins.action";
import { selectCurrentCoins } from "../../store/metaCoins/metaCoins.selector";
import {} from "../../store/metaCoins/metaCoins.selector";
import { useEffect, useState } from "react";
import "./icos.styles.scss";

const metaVerseUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=metaverse&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C%201y";
// const data = sha256(JSON.stringify({ status: "upcoming" }));
// const hash = CryptoJS.HmacSHA256(data, privateKey);
// const hashIn64 = CryptoJS.enc.Base64.stringify(hash);

const ICOS = () => {
  const dispatch = useDispatch();
  const selectCoins = useSelector(selectCurrentCoins);

  useEffect(() => {
    fetch(metaVerseUrl)
      .then((res) => res.json())
      .then((response) => {
        dispatch(setCurrentCoins(response));
      })
      .catch((err) => console.log(err.message));
  }, [dispatch]);

  const coinsList =
    selectCoins &&
    selectCoins.map((coin) => {
      return (
        <div key={coin.id}>
          <IcoCard coin={coin} />
          <Link
            className="read-more-link"
            to={coin.id}
          >{`Learn More About ${coin.name}`}</Link>
          <br />
        </div>
      );
    });

  return (
    <div className="list-container">
      <h2>Top Meta Coins</h2>
      {coinsList}
    </div>
  );
};

export default ICOS;
