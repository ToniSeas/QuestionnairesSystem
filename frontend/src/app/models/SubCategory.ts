export class SubCategory{

    name?: String
    id?: number;
    idCategory?: number;
    editable?: boolean;
    
    constructor({name, id, idCategory}:{name?: String, id?: number, idCategory?: number}) {
        this.name=name;
        this.id=id;
        this.idCategory=idCategory;
        this.editable=false;
    }

}