export class User {

    id?: number;
    name?: String;
    lastname?: String;
    idOffice?: number;

    constructor({ id, name, lastname, idOffice }: { id?: number, name?: String, lastname?: String, idOffice?: number }) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.idOffice = idOffice;
    }

}