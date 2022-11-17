using CuestionariosEntidades.DataTranferObjects;
using CuestionariosEntidades.Models;
using CuestionariosRN.BusinessObjects;
using Microsoft.AspNetCore.Mvc;

namespace CuestionariosAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AnswerController : ControllerBase
    {
        private readonly AnswerRN answerRN;

        public AnswerController() {

            answerRN = new AnswerRN();
        }

        [HttpGet]
        [Route("GetOptionById")]
        public async Task<ActionResult<ResponseDTO<Option>>> GetOptionById(int optionId)
        { 
            return await answerRN.GetOptionById(optionId);
        }


        /*
        // Peticion tipo GET: api/GetAnswer
        [HttpGet]
        [Route("GetAnswer")]
        public async Task<ActionResult<MessageDTO<List<Answer>>>> GetAnswers(int idAnswer)
        {
            return await answerRN.GetAnswers(idAnswer);
        }

        // Petición tipo POST: api/CreateAnswer
        [HttpPost]
        [Route("CreateAnswer")]
        public async Task<ActionResult<MessageDTO<List<Answer>>>> CreateAnswer(Answer answer)
        {
            return await answerRN.CreateAnswer(answer);
        }

        //Petición tipo DELETE: api/DeleteAnswer
        [HttpDelete("DeleteAnswer/{id}")]
        public async Task<ActionResult<MessageDTO<List<Answer>>>> DeleteAnswer(int id)
        {
            return await answerRN.DeleteAnswer(id);
        }
        */
    }
}

