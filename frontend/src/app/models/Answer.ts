import { AnswerOption } from "./AnswerOption"
import { Option } from "./Option"


export class Answer{
  
    id?: number
    date?: Date
    questionId?: number
    answerText: string
    answerOptions: AnswerOption[]
    options: Option[] = []
    
    constructor() {
        this.answerOptions = [];
        this.answerText = "";
    }

}