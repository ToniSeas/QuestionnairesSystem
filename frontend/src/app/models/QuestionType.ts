export class QuestionType{
  
  id?: number;
  name?: String;
  key?: String;

  constructor ({id, name, key}: {id?: number, name?: String, key?: String}) {
      this.id = id;
      this.name = name;
      this.key = key;
  }

}