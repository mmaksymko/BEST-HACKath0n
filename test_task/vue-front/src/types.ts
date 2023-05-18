export type CreditInfo = {
    id: number;
    date: Date;
    sum: number;
}
export type CreditDeposit = {
    id: number,
    operation_date: Date,
    months: number,
    duration: number,
    total_amount: number,
    paid: number,
    interest_rate: number,
    description: string
}
export type MoneyFlowInfo = {
    id: number;
    date: Date;
    sum: number;
    description: number;
}