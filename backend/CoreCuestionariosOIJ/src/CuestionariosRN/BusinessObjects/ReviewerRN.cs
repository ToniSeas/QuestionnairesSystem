using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using CuestionariosAD.DataAccess;
using CuestionariosEntidades.DataTranferObjects;

namespace CuestionariosRN.BusinessObjects
{
    public class ReviewerRN
    {

        private readonly ReviewerAD reviewerData;

        public ReviewerRN() {
            reviewerData = new ReviewerAD();
        }

        public async Task<ActionResult<ResponseDTO<List<ReviewerQuestionnaire>>>> GetReviewersQuestionnaire(int idQuestionnaire)
        {
            return await reviewerData.GetReviewersQuestionnaire(idQuestionnaire);
        }

        public async Task<ActionResult<MessageDTO>> CreateReviewerQuestionnaire(ReviewerQuestionnaire reviewerQuestionnaire)
        {
            return await reviewerData.CreateReviewerQuestionnaire(reviewerQuestionnaire);
        }
        
    }
}
