export class Address {
    id: number;
    streetName: string;
    streetNumber: string;
    city: string;
    poBox: string;
    country: string;
    constructor(id, streetName, streetNumber, city, poBox, country) {
        this.id = id;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.poBox = poBox;
        this.country = country;
        this.city = city;

    }
}
