import IcoCardInfo from "../coin-card-info/ico-card-info.component";

const WatchListCoinInfo = () => {
  const removeCoinFromWatchList = () => {
    console.log("this will remove from watchlist");
  };

  return (
    <div>
      <IcoCardInfo />
      <button onClick={removeCoinFromWatchList}>Remove from WatchList</button>
    </div>
  );
};

export default WatchListCoinInfo;
