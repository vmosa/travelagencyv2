
class Country {
    name: string;
    code: string;
    continent: string;
    constructor(
        name, code, continent?) {
            this.name=name;
            this.code=code;
            this.continent=continent
        }
}
var countryList=[
    (new Country('Greece', 'GRE' )),
    (new Country('Germany', 'GER', 'Europe' )),
    (new Country('France', 'FR' )),
]
enum countries {
    GRE=1,
    GER,
    FRA
}
function getCountry(code) {
    let cl=countryList.filter((c)=>{c.code==code});
    return cl.length>0?cl[0]:null;
}
function addCountry(c:Country){
    if (!getCountry(c.code)){
        countryList.push(c)
    }

}



export class Enums{
    
    countryActions = {getCountry: getCountry, 
    addCountry: addCountry}};
