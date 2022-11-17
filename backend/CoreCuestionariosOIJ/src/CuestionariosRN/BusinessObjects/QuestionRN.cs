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

        public async Task<ActionResult<ResponseDTO<List<Question>>>> GetQuestionWithAnswer(int questionnaireId)
        {
            return await this.questionData.GetQuestionWithAnswer(questionnaireId);
        }

            public async Task<ActionResult<ResponseDTO<List<QuestionType>>>> GetQuestionTypes()
        {
            return await questionData.GetQuestionTypes();
        }

        public async Task<ActionResult<ResponseDTO<QuestionType>>> GetQuestionTypeById(string idType)
        {
            return await questionData.GetQuestionTypeById(idType);
        }

       
    }
}
