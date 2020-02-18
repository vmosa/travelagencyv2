export class Payment {

    id: number;
    customerId: number;
    paymentType: string;
    paymentDate: Date;
    amount;

    constructor(id: number, customerId: number, paymentType: string, paymentDate: Date, amount: number) {
        this.id = id;
        this.customerId = customerId;
        this.paymentDate = paymentDate;
        this.paymentType = paymentType;
        this.amount = amount;
        }
}
