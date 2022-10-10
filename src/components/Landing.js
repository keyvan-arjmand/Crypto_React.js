import React, { useEffect, useState } from "react";

//api
import { getCoin } from "../services/api";
import Coin from "./Coin";
//COmponents
import Loader from "./Loader";
//style
import styles from "./Landing.module.css"

const Landing = () => {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const FetchApi = async () => {
      const data = await getCoin();
      setCoin(data);
      console.log(data);
    };
    FetchApi();
  }, []);
  const searchHalnder = (event) => {
    setSearch(event.target.value);
  };
  const searchCoins = coin.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <input
      className={styles.input}
        type="text"
        placeholder="Search coin"
        value={search}
        onChange={searchHalnder}
      />
      {coin.length ? (
        <div className={styles.coinContainer}>
          {searchCoins.map((i) => (
            <Coin
              key={i.id}
              symbol={i.symbol}
              name={i.name}
              image={i.image}
              currentPrice={i.current_price}
              marketCap={i.market_cap}
              changePrice={i.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Landing;
