import { Category } from "./Category";
import { Option } from "./Option";
import { QuestionType } from "./QuestionType";
import { SubCategory } from "./SubCategory";


export class Question{
  
  id?: number;
  statement?: string;
  label?: string;
  position?: number;
  typeId?: number;
  subcategoryId?: number;
  categoryId?: number;
  options: Option[] = [];
  isOptional?: boolean;

  constructor (
    {id, statement, label, position, subcategoryId, categoryId, typeId, isOptional}: 
    {id?: number, statement?: string, label?: string, position?: number, subcategoryId?: number, categoryId?: number, typeId?: number, isOptional?: boolean}
    ) {
      this.id = id;
      this.statement = statement;
      this.label = label;
      this.position = position;
      this.subcategoryId = subcategoryId;
      this.categoryId = categoryId;
      this.typeId = typeId;
      this.isOptional = isOptional;
    }

}