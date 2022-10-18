import { Category } from "./Category";
import { Option } from "./Option";
import { QuestionType } from "./QuestionType";
import { SubCategory } from "./SubCategory";


export class Question{
  
  id?: number;
  statement?: String;
  label?: String;
  position?: number;
  type?: QuestionType;
  subcategory?: SubCategory;
  category?: Category;
  options?: Option[];

  constructor (
    {id, statement, label, position, subcategory, category, type, options}: 
    {id?: number, statement?: String, label?: String, position?: number, subcategory?: SubCategory, category?: Category, type?: QuestionType, options?: Option[]}
    ) {

      this.id = id;
      this.statement = statement;
      this.label = label;
      this.position = position;
      this.subcategory = subcategory;
      this.category = category;
      this.type = type;
      this.options = options;

    }

}