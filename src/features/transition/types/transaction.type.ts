
export type Transaction = {
  id: number | string,
  name: string,
  description: string,
  amount: string,
  user_id: number | string,
  category_id: number | string,
  category_name:string,
  account_id: number | string,
  account_name: string,
  transaction_type_id: number | string,
  transaction_type_name: string,
  created_at: string,
  updated_at: string
}

export type TransactionRequest = {
    transaction_type_id: string | number,
    amount: string,
    account_id: string | number,
    category_id: string | number,
    name: string,
    description?: string | undefined,
}

export type AmountPercentageResponse = {
    category_percentage: [
        {
            category_name: string,
            transaction_count: number | string,
            total_amount: number | string,
            percent: number | string,
        },
        {
            category_name: string,
            transaction_count: number | string,
            total_amount: number | string,
            percent: number | string,
        }
    ],
    daily_amount: {
        daily_amount: number | string,
        date: string
    },
    weekly_amount: {
        weekly_amount: number | string,
        week_start: string,
        week_end: string,
    },
    monthly_amount: {
        monthly_amount: string | number,
        month: number | string,
    }
}


export type MonthlyComparisonResponse = {
    current_income: string,
    previous_income: string,
    income_change_percent: number,
    income_difference: string,
    current_expense: string,
    previous_expense: string,
    expense_change_percent: number,
    expense_difference: string
}

export type GetByDaysResponse = {
    date: string,
    expense: number,
    income: number
}