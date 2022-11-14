using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using CuestionariosAD.DataAccess;
using CuestionariosEntidades.DataTranferObjects;

namespace CuestionariosRN.BusinessObjects
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReviewerController
    {

        private readonly ReviewerAD reviewerData;

        public ReviewerController() {
            reviewerData = new ReviewerAD();
        }

        // Peticion tipo GET: api/GetReviewersQuestionnaire
        [HttpGet]
        [Route("GetReviewersQuestionnaire")]
        public async Task<ActionResult<ResponseDTO<List<ReviewerQuestionnaire>>>> GetReviewersQuestionnaire(int idQuestionnaire)
        {
            return await reviewerData.GetReviewersQuestionnaire(idQuestionnaire);
        }

        [HttpPost]
        [Route("CreateReviewerQuestionnaire")]
        public async Task<ActionResult<MessageDTO>> CreateReviewerQuestionnaire(ReviewerQuestionnaire reviewerQuestionnaire)
        {
            return await reviewerData.CreateReviewerQuestionnaire(reviewerQuestionnaire);
        }
        
    }
}
