import { Category } from "./Category";
import { QuestionType } from "./QuestionType";
import { SubCategory } from "./SubCategory";


export class Question{
  
  id?: number;
  enunciate?: String;
  label?: String;
  position?: number;
  type?: QuestionType;
  subcategory?: SubCategory;
  category?: Category;

  constructor (
    {id, enunciate, label, position, subcategory, category, type}: 
    {id?: number, enunciate?: String, label?: String, position?: number, subcategory?: SubCategory, category?: Category, type?: QuestionType}
    ) {

      this.id = id;
      this.enunciate = enunciate;
      this.label = label;
      this.position = position;
      this.subcategory = subcategory;
      this.category = category;
      this.type = type;

    }

}