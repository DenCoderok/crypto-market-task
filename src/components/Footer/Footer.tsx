import style from './footer.module.scss';
import smallLogo from '../../media/cryptomarket_smallLogo.png';
import FooterListItem from "./FooterListItem/FooterListItem";

const Footer = () => {
    return(
        <footer>
            <div className={style.footer__wrapper}>
                <div className={style.footer__wrapper_logo}>
                    <img src={smallLogo} alt="small logo crypto market"/>
                </div>

                <div className={style.footer__wrapper_itemsList}>

                    <FooterListItem
                        headLine={'Community'}
                        item1={'Twitter'}
                        item2={'Facebook'}
                        item3={'Discord'}
                        item4={'Reddit'}
                    />

                    <FooterListItem
                        headLine={'About'}
                        item1={'About us'}
                        item2={'Careers'}
                        item3={'Privacy'}
                        item4={'News'}
                    />

                    <FooterListItem
                        headLine={'Learn'}
                        item1={'Blog'}
                        item2={'Newsletter'}
                        item3={'FAQ'}
                        item4={'Crypto basics'}
                    />

                    <FooterListItem
                        headLine={'Support'}
                        item1={'Help center'}
                        item2={'Contact us'}
                        item3={'Account'}
                        item4={'Payments'}
                    />

                </div>

            </div>
        </footer>
    )
}

export default Footer;
