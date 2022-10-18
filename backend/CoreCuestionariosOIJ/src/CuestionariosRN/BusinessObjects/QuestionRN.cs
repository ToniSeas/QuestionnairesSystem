using CuestionariosAD.DataAccess;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;

namespace CuestionariosRN.BusinessObjects
{
    public class QuestionRN
    {

        private readonly QuestionAD questionData;

        public QuestionRN()
        {
            questionData = new QuestionAD();
        }

        public async Task<ActionResult<List<Question>>> GetQuestions()
        {
            return await questionData.GetQuestions();
        }

        public async Task<ActionResult<List<Question>>> CreateQuestion(Question question)
        {
            return await questionData.CreateQuestion(question);
        }
        public async Task<ActionResult<List<Question>>> UpdateQuestion(Question question)
        {
            return await questionData.UpdateQuestion(question);
        }

        public async Task<ActionResult<List<Question>>> DeleteQuestion(int id)
        {
            return await questionData.DeleteQuestion(id);
        }

    }
}
