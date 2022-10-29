import { Question } from "./Question";

export class Questionnaire{
  
  //questions?: Question[];
  id?: number;
  typeId?:String;
  name?:String;
  date?: Date;
  description?: String;
  isActive?: boolean;
  questions: Question[] = [];

  constructor({id, typeId, name, date, description, isActive}:
    {id?: number, typeId?:String, name?:String, date?:Date, description?: String, isActive?: boolean}) 
  {
    this.id=id;
    this.typeId=typeId;
    this.name=name;
    this.date=date;
    this.description=description;
    this.isActive=isActive;
  }
    
}