import { SubCategory } from "./SubCategory";

export class Category{

    name?: String
    id?: number;
    subcategories?: SubCategory[];
    editable?: boolean;

    constructor({name,id,subcategories}:{name?: String, id?: number, subcategories?: SubCategory[]}) {
        this.name=name;
        this.id=id;
        this.subcategories=subcategories;
        this.editable=false;
    }

}