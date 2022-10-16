import { Category } from "./Category";
import { SubCategory } from "./Subcategory";


export class Question{
  
  id?: number;
  enunciate?: String;
  label?: String;
  position?: number;
  subcategory?: SubCategory;
  category?: Category;

}