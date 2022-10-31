using CuestionariosAD.DataAccess;
using CuestionariosEntidades.DataTranferObjects;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CuestionariosRN.BusinessObjects
{
    public class QuestionRN
    {

        private readonly QuestionAD questionData;

        public QuestionRN()
        {
            questionData = new QuestionAD();
        }

        public async Task<ActionResult<ResponseDTO<List<QuestionType>>>> GetQuestionTypes()
        {
            return await questionData.GetQuestionTypes();
        }

        public async Task<ActionResult<ResponseDTO<QuestionType>>> GetQuestionTypeById(int idType)
        {
            return await questionData.GetQuestionTypeById(idType);
        }

        /*
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
        */
    }
}
