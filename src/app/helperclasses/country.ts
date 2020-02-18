export class Country {
    id: number;
    country: string;
    continent: string;
    constructor(id, country?, continent?) {
        this.id = id;
        this.country = country;
        this.continent = continent;
    }
}
