
module.exports = class User {
    constructor(id, firstName, lastName, email, password, address, phone, verified,createdAt, updatedAt) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.address = address;
        this.phone = phone;
        this.verified = verified;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    // Getters
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getName(type){
        switch (type) {
            case 'first':
                return this.firstName
            case 'last':
                return this.lastName
            default:
                return `${this.firstName} ${this.lastName}`;

        }

    }
    getAddresses() {
        return this.address;
    }

    getPhones() {
        return this.phone;

    }
}

