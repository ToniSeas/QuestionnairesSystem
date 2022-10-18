export class Option{

    id?: number;
    option?: string;
    
    constructor({id, option}: {id?: number, option?: string}) {
        this.id = id;
        this.option = option;
    }
    
}