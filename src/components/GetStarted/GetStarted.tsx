import React from 'react';
import style from './getStarted.module.scss'

const GetStarted = () => {
    return(
        <div className={style.getStarted__wrapper_main}>
            <div className={style.getStarted__wrapper}>
                <h5 className={style.getStarted__wrapper_headLine}>
                    Start today. Easly
                </h5>
                <button
                    type="button"
                    className={style.getStarted__wrapper_btn}
                >
                    Get started
                </button>
            </div>
        </div>
    )
}

export default GetStarted;
