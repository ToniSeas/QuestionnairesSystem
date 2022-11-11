using CuestionariosEntidades.DataTranferObjects;
using CuestionariosEntidades.Models;
using CuestionariosRN.BusinessObjects;
using Microsoft.AspNetCore.Mvc;

namespace CuestionariosAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionnaireController : ControllerBase
    {
        private readonly QuestionnaireRN questionnaireRN;

        public QuestionnaireController()
        {
            questionnaireRN = new QuestionnaireRN();
        }
        
        // Peticion tipo GET: api/GetQuestionnaires
        [HttpGet]
        [Route("GetQuestionnaires")]
        public async Task<ActionResult<ResponseDTO<List<Questionnaire>>>> GetQuestionnaires()
        {
            return await questionnaireRN.GetQuestionnaires();
        }

        // Peticion tipo GET: api/GetQuestionnaireById
        [HttpGet]
        [Route("GetQuestionnaireById")]
        public async Task<ActionResult<ResponseDTO<Questionnaire>>> GetQuestionnaireById(int questionnaireId)
        {
            return await questionnaireRN.GetQuestionnaireById(questionnaireId);
        }

        [HttpGet]
        [Route("SearchQuestionnaires")]
        public async Task<ActionResult<ResponseDTO<List<Questionnaire>>>> SearchQuestionnaires(string name)
        {
            return await questionnaireRN.SearchQuestionnaires(name);
        }

        // Petición tipo POST: api/CreateQuestionnaire
        [HttpPost]
        [Route("CreateQuestionnaire")]
        public async Task<ActionResult<MessageDTO>> CreateQuestionnaire(Questionnaire questionnaire)
        {
            return await questionnaireRN.CreateQuestionnaire(questionnaire);
        }

        //Petición tipo PUT: api/UpdateQuestionnaire
        [Route("UpdateQuestionnaire")]
        [HttpPut]
        public async Task<ActionResult<MessageDTO>> UpdateQuestionnaire(Questionnaire questionnaire)
        {
            return await questionnaireRN.UpdateQuestionnaire(questionnaire);
        }

        //Petición tipo DELETE: api/DeleteQuestionnaire
        [HttpDelete("DeleteQuestionnaire/{id}")]
        public async Task<ActionResult<MessageDTO>> DeleteQuestionnaire(int id)
        {
            return await questionnaireRN.DeleteQuestionnaire(id);
        }

        [HttpPost]
        [Route("CommitQuestionnaireAnswers")]
        public async Task<ActionResult<MessageDTO>> CommitQuestionnaireAnswers(Questionnaire questionnaire)
        {
            return await questionnaireRN.CommitQuestionnaireAnswers(questionnaire);
        }

    }
}
