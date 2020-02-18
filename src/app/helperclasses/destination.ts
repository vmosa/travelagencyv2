import { Country } from './country';

export class Destination {
    id: number;
    city: string;
    country: Country;
    constructor(id, city, country) {
        this.id = id;
        this.city = city;
        this.country = country;
    }
}
