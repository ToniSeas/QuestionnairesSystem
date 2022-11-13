export class ReviewerQuestionnaire{
  
    idUser?: number
    idQuestionnaire?: number
    isDeleted?: boolean

    constructor({idUser, idQuestionnaire, isDeleted}:{idUser?: number, idQuestionnaire?: number, isDeleted?: boolean}) {
        this.idUser=idUser;
        this.idQuestionnaire=idQuestionnaire;
        this.isDeleted=isDeleted;
    }

}