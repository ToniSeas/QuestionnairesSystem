import { Answer } from "./Answer";
import { Option } from "./Option"

export class AnswerOption{
  
    idAnswer?: number
    idOption?: number
    option?: Option;
    answer?: Answer;
    
    constructor({idAnswer, idOption}:{idAnswer?: number, idOption?: number}) {
        this.idAnswer = idAnswer;
        this.idOption = idOption;
    }

}