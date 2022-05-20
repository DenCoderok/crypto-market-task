import axios from 'axios';
import { Item, ResponseData } from '../Types';

export const mainAPI = {
    getItems: async (itemsToShow:number) => {
        return await axios.get<ResponseData<Item>>(`https://api.coinlore.net/api/tickers/?limit=${itemsToShow}`)
            .then(res => res.data);
    }
}
