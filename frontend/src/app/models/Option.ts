export class Option{

    id?: number;
    optionName?: string;
    idQuestion?: number;
    idQuestionType?: number;
    
    constructor({id, optionName, idQuestion, idQuestionType}: {id?: number, optionName?: string, idQuestion?: number, idQuestionType?: number}) {
        this.id = id;
        this.optionName = optionName;
        this.idQuestion = idQuestion;
        this.idQuestionType = idQuestionType;
    }
    
}