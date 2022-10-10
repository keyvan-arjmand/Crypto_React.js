import React from "react";
//styles
import styles from "./Coin.module.css";
const Coin = ({
  name,
  symbol,
  image,
  currentPrice,
  marketCap,
  changePrice,
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.currentPrice}>
        $ {currentPrice.toLocaleString()}
      </span>
      <span
        className={
          changePrice > 0 ? styles.greenPriceChange : styles.redPriceChange
        }
      >
        {`${changePrice.toFixed(2)}%`}
      </span>
      <span className={styles.marketCap}>
        $ {marketCap.toLocaleString()}
      </span>
    </div>
  );
};

export default Coin;
