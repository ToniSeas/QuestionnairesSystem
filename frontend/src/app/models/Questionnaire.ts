import { Question } from "./Question";

export class Questionnaire{
  
    questions?: Question[];
    type?:String;
    name?:String;
    date?: Date;
    description?: String;
  
    constructor() {}
    
  }