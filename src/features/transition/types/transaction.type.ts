
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