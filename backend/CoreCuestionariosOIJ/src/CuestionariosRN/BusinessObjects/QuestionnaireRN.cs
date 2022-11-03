using CuestionariosAD.DataAccess;
using CuestionariosEntidades.DataTranferObjects;
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
        
        public async Task<ActionResult<ResponseDTO<List<Questionnaire>>>> GetQuestionnaires()
        {
            return await questionnaireData.GetQuestionnaires();
        }

        public async Task<ActionResult<Questionnaire>> CreateQuestionnaire(Questionnaire questionnaire)
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
        
    }
}
