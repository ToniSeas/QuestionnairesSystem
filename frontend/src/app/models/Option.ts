export class Option{

    id?: number;
    optionName?: string;
    idQuestion?: number;
    idQuestionType?: string;
    editable?: boolean;
    
    constructor({id, optionName, idQuestion, idQuestionType}: {id?: number, optionName?: string, idQuestion?: number, idQuestionType?: string}) {
        this.id = id;
        this.optionName = optionName;
        this.idQuestion = idQuestion;
        this.idQuestionType = idQuestionType;
        this.editable= false;
    }
    
}