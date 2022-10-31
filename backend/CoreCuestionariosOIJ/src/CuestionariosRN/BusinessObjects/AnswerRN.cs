using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using CuestionariosAD.DataAccess;
using CuestionariosEntidades.DataTranferObjects;

namespace CuestionariosRN.BusinessObjects
{
    public class AnswerRN
    {

        private readonly AnswerAD answerData;

        public AnswerRN() {
            answerData = new AnswerAD();
        }
        /*
        public async Task<ActionResult<MessageDTO<List<Answer>>>> GetAnswers(int idQuestion)
        {
            return await answerData.GetAnswers(idQuestion);
        }

        public async Task<ActionResult<MessageDTO<List<Answer>>>> CreateAnswer(Answer answer)
        {
            return await answerData.CreateAnswer(answer);
        }

        public async Task<ActionResult<MessageDTO<List<Answer>>>> DeleteAnswer(int idAnswer)
        {
            return await answerData.DeleteAnswer(idAnswer);
        }
        */
    }
}
