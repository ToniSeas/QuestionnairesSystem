export class QuestionType{
  
  id?: number;
  name?: String;

  constructor ({id, name}: {id?: number, name?: String}) {
      this.id = id;
      this.name = name;
  }

}