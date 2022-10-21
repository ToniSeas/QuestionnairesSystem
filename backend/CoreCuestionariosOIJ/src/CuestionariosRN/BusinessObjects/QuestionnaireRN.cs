using CuestionariosAD.DataAccess;
using CuestionariosAD.DataTranferObjects;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;

namespace CuestionariosRN.BusinessObjects
{
    public class QuestionnaireRN
    {

        private readonly QuestionnaireAD questionnaireData;

        public QuestionnaireRN()
        {
            questionnaireData = new QuestionnaireAD();
        }

        public async Task<ActionResult<MessageDTO<List<Questionnaire>>>> GetQuestionnaires()
        {
            return await questionnaireData.GetQuestionnaires();
        }

        public async Task<ActionResult<MessageDTO<List<Questionnaire>>>> CreateQuestionnaire(Questionnaire questionnaire)
        {
            return await questionnaireData.CreateQuestionnaire(questionnaire);
        }
        public async Task<ActionResult<MessageDTO<List<Questionnaire>>>> UpdateQuestionnaire(Questionnaire questionnaire)
        {
            return await questionnaireData.UpdateQuestionnaire(questionnaire);
        }

        public async Task<ActionResult<MessageDTO<List<Questionnaire>>>> DeleteQuestionnaire(int id)
        {
            return await questionnaireData.DeleteQuestionnaire(id);
        }

    }
}
