import style from "./feature.module.scss";
import React from "react";
import FeatureItem from "./FeatureItem/FeatureItem";

const Feature = () => {
    return(
        <div className={style.feature__wrapper_main}>

            <div className={style.feature__wrapper}>

                <h5 className={style.feature__wrapper_headLine}>
                    Create the next generation crypto exchange website.
                </h5>
                <p className={style.feature__wrapper_textInfo}>
                    Created with Figma and Anima. No coding involved.
                </p>

                <div className={style.feature__wrapper_items}>

                   <FeatureItem/>
                   <FeatureItem/>
                   <FeatureItem/>

                </div>

            </div>

        </div>
    )
}

export default Feature;
