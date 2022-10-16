import { Category } from "./category";
import { SubCategory } from "./subcategory";

export class Question{
  
  id?: number;
  enunciate?: String;
  label?: String;
  position?: number;
  subcategory?: SubCategory;
  category?: Category;

  constructor() {}

}