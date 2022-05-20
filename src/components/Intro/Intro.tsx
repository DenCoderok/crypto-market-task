import React from "react";
import style from "./intro.module.scss";
import Image from '../../media/Image.png'


const Intro = () => {
    return (
        <div className={style.introWrapper}>
            <div className={style.introTextBlock}>
                <h3 className={style.introText}>
                    Create the next generation crypto exchange website.
                </h3>
            </div>
            <div>
                <img
                    className={style.introImg}
                    src={Image}
                    alt="Intro img"
                />
            </div>
        </div>
    )
}


export default Intro;
