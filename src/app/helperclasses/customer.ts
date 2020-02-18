export class Customer {
    id: number;
    name: string;
    surname: string;
    addressId: number;
    dateOfBirth: Date;
    constructor(id, name, surname, addressId, dateOfBirth) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.addressId = addressId;
            this.dateOfBirth = dateOfBirth;

    }
}
