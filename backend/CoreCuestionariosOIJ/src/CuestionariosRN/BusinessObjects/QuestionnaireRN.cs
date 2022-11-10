using CuestionariosAD.DataAccess;
using CuestionariosEntidades.DataTranferObjects;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CuestionariosRN.BusinessObjects
{
    public class QuestionnaireRN
    {

        private readonly QuestionnaireAD questionnaireData;

        public QuestionnaireRN()
        {
            questionnaireData = new QuestionnaireAD();
        }
        
        public async Task<ActionResult<ResponseDTO<List<Questionnaire>>>> GetQuestionnaires()
        {
            return await questionnaireData.GetQuestionnaires();
        }

        public async Task<ActionResult<ResponseDTO<Questionnaire>>> GetQuestionnaireById(int questionnaireId)
        {
            return await questionnaireData.GetQuestionnaireById(questionnaireId);
        }

        public async Task<ActionResult<ResponseDTO<List<Questionnaire>>>> SearchQuestionnaires(string name)
        {
            return await questionnaireData.SearchQuestionnaires(name);
        }

        public async Task<ActionResult<MessageDTO>> CreateQuestionnaire(Questionnaire questionnaire)
        {
            return await questionnaireData.CreateQuestionnaire(questionnaire);
        }
        public async Task<ActionResult<MessageDTO>> UpdateQuestionnaire(Questionnaire questionnaire)
        {
            return await questionnaireData.UpdateQuestionnaire(questionnaire);
        }

        public async Task<ActionResult<MessageDTO>> DeleteQuestionnaire(int id)
        {
            return await questionnaireData.DeleteQuestionnaire(id);
        }

        public async Task<ActionResult<MessageDTO>> CommitQuestionnaireAnswers(Questionnaire questionnaire)
        {
            return await questionnaireData.CommitQuestionnaireAnswers(questionnaire);
        }

        public async Task<ActionResult<ResponseDTO<List<QuestionnaireType>>>> GetQuestionnaireTypes()
        {
            return await questionnaireData.GetQuestionnaireTypes();
        }

    }
}
