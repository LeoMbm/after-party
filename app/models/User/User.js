const Address = require("../Address/Address");
const Phone = require("./Phone");
module.exports = class User {
    constructor(id, first_name, last_name, email, password, address, phone, created_at, updated_at) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.address = Address;
        this.phone = Phone;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }


    // Getters


}

