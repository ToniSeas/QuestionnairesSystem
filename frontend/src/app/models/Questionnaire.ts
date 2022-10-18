import { Question } from "./Question";

export class Questionnaire{
  
  //questions?: Question[];
  type?:String;
  name?:String;
  date?: Date;
  description?: String;
  state?: String;

  constructor({type, name, date, description, state}:{type?:String, name?:String, date?:Date, description?: String, state?: String}) {
    this.type=type;
    this.name=name;
    this.date=date;
    this.description=description;
    this.state=state;
  }
    
}