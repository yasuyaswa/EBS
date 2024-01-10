export interface Payment{
    paymentId: number;
    paymentDate: Date;
    customerId: number;
    billId: number;
    paymentStatus: string;
}