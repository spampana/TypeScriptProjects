class Person {
    constructor(_socialId, _contactName, _address, _city, _phone) {
        this._socialId = _socialId;
        this._contactName = _contactName;
        this._address = _address;
        this._city = _city;
        this._phone = _phone;
        console.log("Person Constructor");
    }
    printPersonInformation() {
        return `Contact name is ${this.contactName} 
        who lives in city ${this.city} and 
        contact # ${this.phone}`;
    }
    get socialId() {
        return this._socialId;
    }
    set socialId(value) {
        this._socialId = value;
    }
    get contactName() {
        return this._contactName;
    }
    set contactName(v) {
        this._contactName = v;
    }
    get address() {
        return this._address;
    }
    set address(v) {
        this._address = v;
    }
    get city() {
        return this._city;
    }
    set city(v) {
        this._city = v;
    }
    get phone() {
        return this._phone;
    }
    set phone(v) {
        this._phone = v;
    }
}
class Employee extends Person {
    constructor(_employeeId) {
        super();
        this._employeeId = _employeeId;
        console.log("Employee Constructor");
    }
    changeAddress(socialId, newAddress) {
        console.log(`Employee ${this.contactName} address is changed to ${newAddress}`);
        return true;
    }
    get employeeId() {
        return this._employeeId;
    }
    set employeeId(v) {
        this._employeeId = v;
    }
}
let person = new Employee();
person.socialId = 38989899;
person.city = "Hyd";
person.contactName = "Satya";
person.phone = "123456789";
console.log(person.printPersonInformation());
console.log(person.changeAddress(person.socialId, "AP"));
//# sourceMappingURL=class-examples.js.map