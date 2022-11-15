import { Question } from "../models/Question";
import { QuestionType } from "../models/QuestionType";

// Esta clase es la principal, aqui se encontraran las constantes
// y funciones que son de utilidad con lo relacionado a las preguntas
export class QuestionUtil {

    public static readonly UNIQUE_SELECTION: string = "su";
    public static readonly MULTIPLE_SELECTION: string = "sm";
    public static readonly SCALE: string = "es";
    public static readonly NUMERIC: string = "nu";
    public static readonly TRUE_FALSE: string = "vf";
    public static readonly OPENED: string = "rl";

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


    /**
     * Este método valida si a una pregunta se le dió respuesta. Si la pregunta
     * es opcional el método retorna verdadero ya que es irrelevante si tiene respuesta o no.
     * @param question La pregunta por validar
     * @returns verdadero si la respuesta de la pregunta es válida.
     */
    public static validateAnsweredQuestion(question: Question): boolean {
        if (question.isOptional) {
            return true
        }
        if (question.answers.length > 0) {
            switch (question.typeId) {
                case 'su':
                    return question.answers[0].answerOptions.length > 0 || question.isOptional!
                    break;
                case 'sm':
                    return question.answers[0].answerOptions.length > 0 || question.isOptional!
                    break;
                case 'rl':
                    return question.answers[0].answerText!.length > 0 || question.isOptional!
                    break;
                case 'vf':
                    return question.answers[0].answerOptions.length > 0 || question.isOptional!
                    break;
                case 'es':
                    return question.answers[0].answerOptions.length > 0 || question.isOptional!
                    break;
                case 'nu':
                    return question.answers[0].answerText!.length > 0 || question.isOptional!
                    break;
            }
        }
        return false
    }
}

// Esta clase se encarga de generar objetos que esten
// relacionados a pregunta (tipo de pregunta, pregunta, etc...)
export class QuestionFactory {

    public questionTypeFactory(key: string, id?: string): QuestionType {

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
                return new QuestionType({ id: '', key: '', name: "" });
        }
    }

}
