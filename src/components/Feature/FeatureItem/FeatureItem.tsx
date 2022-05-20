import style from './featureItem.module.scss';
import React from "react";


const FeatureItem = () => {
    return(
        <div className={style.feature__item}>
            <div className={style.feature__item_logo}> </div>
            <div>
                <p className={style.feature__item_headLine}>
                    Awesome feature
                </p>
                <p className={style.feature__item_infoText}>
                    Fill in the details with a clear description of your feature.
                </p>

                <span className={style.feature__item_more}>
                    Learn more
                </span>
            </div>
        </div>
    )
}

export default FeatureItem;
