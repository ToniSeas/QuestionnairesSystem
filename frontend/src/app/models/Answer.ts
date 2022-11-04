import { Option } from "./Option"

export class Answer{
  
    id?: number
    date?: Date
    questionId?: number
    answerText: string
    options: Option[]
    
    constructor() {
        this.options = []
        this.answerText = ""
    }

}