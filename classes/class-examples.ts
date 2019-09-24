abstract class Person {
    constructor(
        private _socialId?: number,
        private _contactName?: string,
        private _address?: string,
        private _city?: string,
        private _phone?: string) {
            console.log("Person Constructor");
        }

    public printPersonInformation(): string {
        return `Contact name is ${this.contactName} 
        who lives in city ${this.city} and 
        contact # ${this.phone}`;
    }


    public get socialId(): number {
        return this._socialId;
    }

    public set socialId(value: number) {
        this._socialId = value;
    }

    public get contactName(): string {
        return this._contactName;
    }
    public set contactName(v: string) {
        this._contactName = v;
    }

    public get address(): string {
        return this._address;
    }
    public set address(v: string) {
        this._address = v;
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

    abstract changeAddress(socialId: number, newAddress: string): boolean;
}


class Employee extends Person {

    constructor(private _employeeId?: number) {
        super();
        console.log("Employee Constructor");
    }

    changeAddress(socialId: number, newAddress: string): boolean {
        console.log(`Employee ${this.contactName} address is changed to ${newAddress}`);
        return true;
    }


    public get employeeId(): number {
        return this._employeeId;
    }
    public set employeeId(v: number) {
        this._employeeId = v;
    }
}


let person: Employee = new Employee();
person.socialId = 38989899;
person.city = "Hyd";
person.contactName = "Satya";
person.phone = "123456789";
console.log(person.printPersonInformation());
console.log(person.changeAddress(person.socialId,"AP"));

