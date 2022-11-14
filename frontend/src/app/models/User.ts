export class User {

    id?: number;
    name?: String;
    lastname?: String;
    idOffice?: number;
    role?: string;

    constructor({ id, name, lastname, idOffice, role }: { id?: number, name?: String, lastname?: String, idOffice?: number, role?: string }) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.idOffice = idOffice;
        this.role = role;
    }
    
}