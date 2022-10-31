import { QuestionType } from "../models/QuestionType";

// Esta clase es la principal, aqui se encontraran las constantes
// y funciones que son de utilidad con lo relacionado a las preguntas
export class QuestionUtil {

    public static readonly UNIQUE_SELECTION:string = "Selección Única";
    public static readonly MULTIPLE_SELECTION:string = "Selección Múltiple";
    public static readonly SCALE:string = "Escala";
    public static readonly NUMERIC:string = "Numérica";
    public static readonly TRUE_FALSE:string = "Verdadero o Falso";
    public static readonly OPENED:string = "Abierta";

    public static requireOption(key: string): boolean {
        switch (key) {
            case QuestionUtil.UNIQUE_SELECTION: {
                return true;
            }
            case QuestionUtil.MULTIPLE_SELECTION: {
                return true;
            }
            case QuestionUtil.SCALE: {
                return false;
            }
            case QuestionUtil.NUMERIC: {
                return false;
            }
            case QuestionUtil.TRUE_FALSE: {
                return false;
            }
            case QuestionUtil.OPENED: {
                return false;
            }
            default:
                return false;
        }
    }
}

// Esta clase se encarga de generar objetos que esten
// relacionados a pregunta (tipo de pregunta, pregunta, etc...)
export class QuestionFactory {

    public questionTypeFactory(key: string, id?: number): QuestionType {

        switch (key) {
            case QuestionUtil.UNIQUE_SELECTION: {
                return new QuestionType({ id: id, key: key, name: "Selección Única" });
            }
            case QuestionUtil.MULTIPLE_SELECTION: {
                return new QuestionType({ id: id, key: key, name: "Selección Múltiple" });
            }
            case QuestionUtil.SCALE: {
                return new QuestionType({ id: id, key: key, name: "Escala" });
            }
            case QuestionUtil.NUMERIC: {
                return new QuestionType({ id: id, key: key, name: "Numérica" });
            }
            case QuestionUtil.TRUE_FALSE: {
                return new QuestionType({ id: id, key: key, name: "Verdadero o Falso" });
            }
            case QuestionUtil.OPENED: {
                return new QuestionType({ id: id, key: key, name: "Abierta" });
            }
            default:
                return new QuestionType({ id: -1, key: '', name: "" });
        }
    }

}
