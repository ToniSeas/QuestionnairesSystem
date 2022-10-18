import { Question } from "./Question";

export class Questionnaire{
  
  //questions?: Question[];
  id?: number;
  type?:String;
  name?:String;
  date?: Date;
  description?: String;
  state?: String;

  constructor({id,type, name, date, description, state}:{id?: number,type?:String, name?:String, date?:Date, description?: String, state?: String}) {
    this.id=id;
    this.type=type;
    this.name=name;
    this.date=date;
    this.description=description;
    this.state=state;
  }
    
}