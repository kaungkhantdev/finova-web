
export type Wallet = {
    id: string | number;
    name: string;
    description: string;
    amount: string;
    currency_code: string
}

export type BalanceAndExchangeRate = {
    from_currency: string,
    from_currency_symbol: string,
    original_amount: number | string,
    conversions: {
        EUR: number | string,
        GBP: number | string,
        USD: number | string,
    },
    last_updated: string,
    formatted_original_amount: string,
    formatted_conversions: {
        EUR: string,
        GBP: string,
        USD: string,
    }
} 