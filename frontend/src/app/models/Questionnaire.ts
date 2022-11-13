import { Question } from "./Question";
import { ReviewerQuestionnaire } from "./ReviewerQuestionnaire";

export class Questionnaire {

  id?: number;
  idQuestionnaireType?: String;
  name?: String;
  creationDate?: Date;
  expirationDate?: Date;
  description?: String;
  isActive?: boolean;
  questions: Question[] = [];
  reviewersQuestionnaire: ReviewerQuestionnaire[] = [];

  constructor({ id, idQuestionnaireType, name, expirationDate, description, isActive }:
    { id?: number, idQuestionnaireType?: String, name?: String, expirationDate?: Date, description?: String, isActive?: boolean }) {
    this.id = id;
    this.idQuestionnaireType = idQuestionnaireType;
    this.name = name;
    this.expirationDate = expirationDate;
    this.description = description;
    this.isActive = isActive;
  }

  sortQuestions() {
    let newArray: Question[] = []
    this.questions.forEach(element => {
      let added = false
      for (let i = 0; i < newArray.length; i++) {
        if (element.position! < newArray[i].position!) {
          if (i == 0) {
            newArray.unshift(element)
          } else {
            newArray.splice(i, 0, element)
          }
          added = true
          break
        }
      }
      if (!added) {
        newArray.push(element)
      }
    });
    
    this.questions = newArray
  }

}