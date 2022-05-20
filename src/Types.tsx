
export interface Item {
    id: string;
    symbol: string;
    name: string;
    price_usd: string;
    percent_change_1h: string;
    market_cap_usd: string;
}

export interface ResponseData<T = {}> {
    data: T[];
    info: {
        coins_num: number;
        time: number;
    }
}
