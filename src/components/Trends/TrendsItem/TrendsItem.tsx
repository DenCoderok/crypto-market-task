import style from "./trendItem.module.scss";
import React from "react";

type Props = {
    symbol: string;
    name: string;
    price_usd: string;
    percent_change_1h: string | number;
    market_cap_usd: string;
}

const TrendsItem:React.FC<Props> =
    ({
         symbol,
         name,
         price_usd,
         percent_change_1h,
         market_cap_usd
    }) => {

    return(
        <>
            <div className={style.coinNameInfo}>
                <span className={style.coinLogo}>
                    {name[0].toUpperCase()}
                </span>
                <p className={style.coinName}>{name}</p>
                <p className={style.coinSymbol}>{symbol}</p>
            </div>
            <div className={style.lastPriceInfo}>
                { +price_usd < 1
                    ? `$ ${price_usd.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ')}`
                    : `$ ${price_usd.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ', ')}`
                }
            </div>
            <div
                className={style.changePersentInfo}
                style={+percent_change_1h < 0 ? {color: 'red'} : {color: 'green'}}
            >
                {+percent_change_1h < 0 ? percent_change_1h : `+${percent_change_1h}` }%
            </div>
            <div className={style.marketCapInfo}>
                {`$ ${market_cap_usd.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ')}`}
            </div>
        </>
    )
}

export default TrendsItem;
