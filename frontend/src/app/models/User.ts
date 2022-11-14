export class User {

    userName?: string;
    role?: string;
    idOffice?: number;
    name?: string;
    id?: number;

    constructor({ userName, role, idOffice, name, id }: { userName?: string, role?: string, idOffice?: number, name?: string, id?: number }) {
        this.id = id;
        this.name = name;
        this.idOffice = idOffice;
        this.role = role;
        this.userName = userName;
    }
}