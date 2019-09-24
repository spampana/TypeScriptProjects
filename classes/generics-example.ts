class SynePerson {
    constructor(
        private _contactName?: string,
        private _city?: string,
        private _phone?: string) {
    }

    public get contactName(): string {
        return this._contactName;
    }
    public set contactName(v: string) {
        this._contactName = v;
    }


    public get city(): string {
        return this._city;
    }
    public set city(v: string) {
        this._city = v;
    }


    public get phone(): string {
        return this._phone;
    }
    public set phone(v: string) {
        this._phone = v;
    }
}

class SyneCustomer extends SynePerson {
    constructor(private _customerId: number) {
        super();
    }


    public get customerId(): number {
        return this._customerId;
    }
    public set customerId(v: number) {
        this._customerId = v;
    }

}

class SyneEmployee extends SynePerson {
    constructor(private _employeeId: number) {
        super();
    }

    public get employeeId(): number {
        return this._employeeId;
    }
    public set employeeId(v: number) {
        this._employeeId = v;
    }
}

interface CommonCrudOperations<T> {
    getAll(): T[];
    getDetails(id: number): T;
    insert(t: T): void;
}

class CommonRepository<T> implements CommonCrudOperations<T>{

    private _collection: Array<T> = new Array<T>();

    getAll(): T[] {
        return this._collection;
    }

    getDetails(id: number): T {
        return this._collection[0];
    }
    insert(t: T): void {
        this._collection.push(t);
    }
}



let empCurd: CommonCrudOperations<SyneEmployee> = new CommonRepository<SyneEmployee>();

let syneE:SyneEmployee = new SyneEmployee(1);
//syneE.city = "Hyd";
//syneE.contactName ="Satya";
//syneE.phone = "1234656789"

empCurd.insert(syneE);
console.log(empCurd.getAll());
//console.log(empCurd.getDetails(1));