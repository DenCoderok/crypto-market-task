import React from "react";
import { Item } from '../../Types';
import style from './trends.module.scss';
import TrendsItem from "./TrendsItem/TrendsItem";
import {Spinner} from "../../spinner/Spinner";

type Props = {
    getData: Item[];
    loadMore: () => void;
    isLoading: boolean;
}

const Trends:React.FC<Props> = ({getData, loadMore, isLoading}) => {
    console.log(isLoading);

    return(
        <div className={style.trends__wrapper}>
            <h5 className={style.trends__wrapper_headLine}>Market trends</h5>
            <ul className={style.trends__wrapper_list}>
                <li className={style.trends__wrapper_coin_headLine}>
                    <div className={style.trends__wrapper_coin_headLine_name}>
                        Name
                    </div>
                    <div className={style.trends__wrapper_coin_headLine_price}>
                        Last Price
                    </div>
                    <div className={style.trends__wrapper_coin_headLine_change}>
                        Change
                    </div>
                    <div className={style.trends__wrapper_coin_headLine_cap}>
                        Market cap
                    </div>
                </li>
                {getData.map(elem => {
                    const { id, symbol, name, price_usd, percent_change_1h, market_cap_usd } = elem;

                    return (
                        <li
                            key={id}
                            className={style.trends__wrapper_coin_info}
                        >
                            <TrendsItem
                                symbol={symbol}
                                name={name}
                                price_usd={price_usd}
                                percent_change_1h={percent_change_1h}
                                market_cap_usd={market_cap_usd}
                            />
                        </li>
                    )
                })}

                {isLoading && <Spinner/> }
            </ul>
            <div className={style.btn__wrapper}>
                <button
                    type="button"
                    className={style.showMoreBtn}
                    onClick={() => loadMore()}>
                    More
                </button>
            </div>
        </div>
    )
}

export default Trends;
