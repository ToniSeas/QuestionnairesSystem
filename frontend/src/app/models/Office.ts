export class Office{

    name?: String
    id?: number;
    
    constructor({id, name}: {id?: number, name?: String}) {
        this.name = name
        this.id = id
    }

}