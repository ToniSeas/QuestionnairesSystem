import { Category } from "./Category";

export class SubCategory{

    name?: String
    id?: number;
    idCategory?: number;
    
    constructor({name,id, idCategory}:{name?: String, id?: number, idCategory?: number}) {
        this.name=name;
        this.id=id;
    }

}