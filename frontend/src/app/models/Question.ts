import { Answer } from "./Answer";
import { Option } from "./Option";


export class Question{
  
  id?: number;
  statement?: string;
  label?: string;
  position?: number;
  typeId?: string;
  subCategoryId?: number;
  categoryId?: number;
  options: Option[] = [];
  isOptional?: boolean;
  answers: Answer[] = []

  constructor (
    {id, statement, label, position, subCategoryId, categoryId, typeId, isOptional}: 
    {id?: number, statement?: string, label?: string, position?: number, subCategoryId?: number, categoryId?: number, typeId?: string, isOptional?: boolean}
    ) {
      this.id = id;
      this.statement = statement;
      this.label = label;
      this.position = position;
      this.subCategoryId = subCategoryId;
      this.categoryId = categoryId;
      this.typeId = typeId;
      this.isOptional = isOptional;
    }
}