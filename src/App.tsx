import React, { useEffect, useState } from 'react';
import style from './app.module.scss';
import Intro from './components/Intro/Intro';
import Trends from './components/Trends/Trends';
import Feature from "./components/Feature/Feature";
import GetStarted from "./components/GetStarted/GetStarted";

import CryptoMarket from './media/CryptoMarket.png'
import { mainAPI } from './api/api'
import { Item } from "./Types";
import Footer from "./components/Footer/Footer";



function App() {

    const [val, setVal] = useState<Item[]>([]);
    const [itemsToShow, setItemsToShow] = useState(10);
    const [isLoading, setIsLoading] = useState(true);

    const getAnswer = async () => {
        const dataApi  = await mainAPI.getItems(itemsToShow);
        setVal(dataApi.data)
        setIsLoading(false);
    };

    useEffect(() => {
        getAnswer();
    }, [itemsToShow]);


    const loadMore = () => {
        setIsLoading(true);
        setItemsToShow(itemsToShow + 10);
    }

  return (
    <div className={style.appReset}>
      <header className={style.header}>
          <img src={CryptoMarket} alt="Crypto Market logo"/>
      </header>
        <Intro />
        <Trends
            getData={val}
            loadMore={loadMore}
            isLoading={isLoading}
        />
        <Feature />
        <GetStarted />
        <Footer />
    </div>
  );
}

export default App;
