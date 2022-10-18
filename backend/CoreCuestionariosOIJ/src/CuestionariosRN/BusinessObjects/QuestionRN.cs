using CuestionariosAD.DataAccess;
using CuestionariosEntidades.EFModels;
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

        public async Task<ActionResult<List<EFQuestion>>> GetQuestions()
        {
            return await questionData.GetQuestions();
        }

        public async Task<ActionResult<List<EFQuestion>>> CreateQuestion(EFQuestion question)
        {
            return await questionData.CreateQuestion(question);
        }
        public async Task<ActionResult<List<EFQuestion>>> UpdateQuestion(EFQuestion question)
        {
            return await questionData.UpdateQuestion(question);
        }

        public async Task<ActionResult<List<EFQuestion>>> DeleteQuestion(int id)
        {
            return await questionData.DeleteQuestion(id);
        }

    }
}
