using CuestionariosAD.DataAccess;
using CuestionariosEntidades.EFModels;
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

        public async Task<ActionResult<List<EFQuestionnaire>>> GetQuestionnaires()
        {
            return await questionnaireData.GetQuestionnaires();
        }

        public async Task<ActionResult<List<EFQuestionnaire>>> CreateQuestionnaire(EFQuestionnaire questionnaire)
        {
            return await questionnaireData.CreateQuestionnaire(questionnaire);
        }
        public async Task<ActionResult<List<EFQuestionnaire>>> UpdateQuestionnaire(EFQuestionnaire questionnaire)
        {
            return await questionnaireData.UpdateQuestionnaire(questionnaire);
        }

        public async Task<ActionResult<List<EFQuestionnaire>>> DeleteQuestionnaire(int id)
        {
            return await questionnaireData.DeleteQuestionnaire(id);
        }

    }
}
