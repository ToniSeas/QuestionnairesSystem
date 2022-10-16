import { Category } from "./Category";
import { SubCategory } from "./Subcategory";


export class Question{
  
  id?: number;
  enunciate?: String;
  label?: String;
  position?: number;
  subcategory?: SubCategory;
  category?: Category;

  constructor (
    {id, enunciate, label, position, subcategory, category}: 
    {id?: number, enunciate?: String, label?: String, position?: number, subcategory?: SubCategory, category?: Category}
    ) {

      this.id = id;
      this.enunciate = enunciate;
      this.label = label;
      this.position = position;
      this.subcategory = subcategory;
      this.category = category;

    }

}