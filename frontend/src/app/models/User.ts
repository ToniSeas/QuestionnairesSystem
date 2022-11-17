export class User {

    userName?: string;
    role?: string;
    name?: string;
    id?: number;
    idOffices?: number[] = [];

    constructor({ userName, role, name, id }: { userName?: string, role?: string, name?: string, id?: number }) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.userName = userName;
    }

}