using CuestionariosEntidades.EFModels;
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

        // Peticion tipo GET: api/GetQuestions
        [HttpGet]
        [Route("GetQuestions")]
        public async Task<ActionResult<List<EFQuestion>>> GetQuestions()
        {
            return await questionRN.GetQuestions();
        }

        // Petición tipo POST: api/CreateQuestion
        [HttpPost]
        [Route("CreateQuestion")]
        public async Task<ActionResult<List<EFQuestion>>> CreateQuestion(EFQuestion question)
        {
            return await questionRN.CreateQuestion(question);
        }

        //Petición tipo PUT: api/UpdateQuestion
        [Route("UpdateQuestion")]
        [HttpPut]
        public async Task<ActionResult<List<EFQuestion>>> UpdateQuestion(EFQuestion question)
        {
            return await questionRN.UpdateQuestion(question);
        }

        //Petición tipo DELETE: api/DeleteQuestion
        [HttpDelete("DeleteQuestion/{id}")]
        public async Task<ActionResult<List<EFQuestion>>> DeleteQuestion(int id)
        {
            return await questionRN.DeleteQuestion(id);
        }

    }
}
