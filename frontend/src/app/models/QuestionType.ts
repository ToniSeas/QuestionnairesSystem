export class QuestionType{
  
  id?: string;
  name?: string; 
  key?: string;

  constructor ({id, name, key}: {id?: string, name?: string, key?: string}) {
      this.id = id;
      this.name = name;
      this.key = key;
  }

}