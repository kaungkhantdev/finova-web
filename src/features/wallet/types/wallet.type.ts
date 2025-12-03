
export type Wallet = {
    id: string | number;
    name: string;
    description: string;
    amount: string;
    currency_code: string
}

export type WalletRequest = {
    name?: string;
    description?: string;
}

export type WalletWithIncomeExpense = {
    account_id: number,
    account_name: string,
    description: string,
    amount: string,
    currency: string,
    currency_code: string,
    currency_symbol: string,
    total_income: number,
    total_expense: number
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