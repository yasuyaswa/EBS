export interface Bill{
    billId: number;
    billGenDate: Date;
    customerId: number;
    perUnitCost: number;
    totalUnits: number;
    billAmount: number;
    billDueDate: Date;
}