import { User } from "./User"

export class Reviewer extends User{

    idQuestionnaire?: number

    constructor({ id, name, lastname, idOffice, idQuestionnaire }: { id?: number, name?: String, lastname?: String, idOffice: number, idQuestionnaire?: number }) {
        super(id, name, lastname, idOffice)
        this.idQuestionnaire = idQuestionnaire
    }

} 