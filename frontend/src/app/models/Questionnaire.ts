import { Question } from "./Question";

export class Questionnaire{

  id?: number;
  idQuestionnaireType?:String;
  name?:String;
  creationDate?: Date;
  expirationDate?: Date;
  description?: String;
  isActive?: boolean;
  questions: Question[] = [];

  constructor({id, idQuestionnaireType, name, expirationDate, description, isActive}:
    {id?: number, idQuestionnaireType?:String, name?:String, expirationDate?:Date, description?: String, isActive?: boolean}) 
  {
    this.id=id;
    this.idQuestionnaireType=idQuestionnaireType;
    this.name=name;
    this.expirationDate=expirationDate;
    this.description=description;
    this.isActive=isActive;
  }
    
}