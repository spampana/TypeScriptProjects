class SynePerson {
    constructor(_contactName, _city, _phone) {
        this._contactName = _contactName;
        this._city = _city;
        this._phone = _phone;
    }
    get contactName() {
        return this._contactName;
    }
    set contactName(v) {
        this._contactName = v;
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
class SyneCustomer extends SynePerson {
    constructor(_customerId) {
        super();
        this._customerId = _customerId;
    }
    get customerId() {
        return this._customerId;
    }
    set customerId(v) {
        this._customerId = v;
    }
}
class SyneEmployee extends SynePerson {
    constructor(_employeeId) {
        super();
        this._employeeId = _employeeId;
    }
    get employeeId() {
        return this._employeeId;
    }
    set employeeId(v) {
        this._employeeId = v;
    }
}
class CommonRepository {
    constructor() {
        this._collection = new Array();
    }
    getAll() {
        return this._collection;
    }
    getDetails(id) {
        return this._collection[0];
    }
    insert(t) {
        this._collection.push(t);
    }
}
let empCurd = new CommonRepository();
let syneE = new SyneEmployee(1);
//syneE.city = "Hyd";
//syneE.contactName ="Satya";
//syneE.phone = "1234656789"
empCurd.insert(syneE);
console.log(empCurd.getAll());
//console.log(empCurd.getDetails(1));
//# sourceMappingURL=generics-example.js.map