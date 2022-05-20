import React from "react";
import style from './footerListItem.module.scss'

type Props = {
    headLine: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
}

const FooterListItem:React.FC<Props>
    = ({
           headLine,
           item1,
           item2,
           item3,
           item4
    }) => {
    return(
        <ul className={style.footer__listItems}>
            <li className={style.footer__listItem_headLine}>
                {headLine}
            </li>
            <li className={style.footer__listItem}>
                {item1}
            </li>
            <li className={style.footer__listItem}>
                {item2}
            </li>
            <li className={style.footer__listItem}>
                {item3}
            </li>
            <li className={style.footer__listItem}>
                {item4}
            </li>
        </ul>
    )
}

export default FooterListItem;
