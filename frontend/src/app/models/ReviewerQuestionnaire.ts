import { Office } from "./Office";
import { User } from "./User";

export class ReviewerQuestionnaire{
  
    idUser?: number
    idQuestionnaire?: number
    isDeleted?: boolean

    user?: User;
    office?: Office;

    constructor({idUser, idQuestionnaire, isDeleted}:{idUser?: number, idQuestionnaire?: number, isDeleted?: boolean}) {
        this.idUser=idUser;
        this.idQuestionnaire=idQuestionnaire;
        this.isDeleted=isDeleted;
    }

}