using CuestionariosEntidades.DataTranferObjects;
using CuestionariosEntidades.Models;
using CuestionariosRN.BusinessObjects;
using Microsoft.AspNetCore.Mvc;

namespace CuestionariosAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionController : ControllerBase
    {
        private readonly QuestionRN questionRN;

        public QuestionController()
        {

            questionRN = new QuestionRN();
        }

        // Peticion tipo GET: api/GetQuestionWithAnswer
        [HttpGet]
        [Route("GetQuestionWithAnswer")]
        public async Task<ActionResult<ResponseDTO<List<Question>>>> GetQuestionWithAnswer(int questionnaireId)
        {
            return await this.questionRN.GetQuestionWithAnswer(questionnaireId);
        }

        // Peticion tipo GET: api/GetQuestionTypes
        [HttpGet]
        [Route("GetQuestionTypes")]
        public async Task<ActionResult<ResponseDTO<List<QuestionType>>>> GetQuestionTypes()
        {
            return await questionRN.GetQuestionTypes();
        }

        // Peticion tipo GET: api/GetQuestionTypeById
        [HttpGet]
        [Route("GetQuestionTypeById")]
        public async Task<ActionResult<ResponseDTO<QuestionType>>> GetQuestionTypeById(string idType)
        {
            return await questionRN.GetQuestionTypeById(idType);
        }
        
    }
}
