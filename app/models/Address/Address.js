module.exports = class Address {
    constructor(street, city, boxNumber, postal_code, country) {
        this.street = street;
        this.city = city;
        this.boxNumber = boxNumber;
        this.postal_code = postal_code;
        this.country = country;
    }
}