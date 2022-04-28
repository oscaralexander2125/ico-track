const IcoPreviewCard = ({ coin }) => {
  return (
    <div>
      <div>{coin.name}</div>
      <div>Market Cap: {coin.market_cap.toLocaleString("en-us")}</div>
      <div>Price: ${coin.current_price}</div>
    </div>
  );
};

export default IcoPreviewCard;
