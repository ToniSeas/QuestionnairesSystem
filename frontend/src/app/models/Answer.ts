import { AnswerOption } from "./AnswerOption"

export class Answer{
  
    id?: number
    date?: Date
    questionId?: number
    answerText: string
    answerOptions: AnswerOption[]
    
    constructor() {
        this.answerOptions = [];
        this.answerText = "";
    }

}