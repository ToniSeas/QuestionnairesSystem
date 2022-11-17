using CuestionariosAD.Context;
using CuestionariosEntidades.DataTranferObjects;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CuestionariosAD.DataAccess
{
    public class QuestionAD
    {

        private readonly DataContext _context;

        public QuestionAD()
        {
            _context = new DataContext();
        }

        public async Task<ActionResult<ResponseDTO<List<Question>>>> GetQuestionWithAnswer(int questionnaireId)
        {
            var responseDTO = new ResponseDTO<List<Question>>();
            try
            {
                var dbQuestions = await _context.Questions
                    .Include(e => e.Answers)
                    .Where(e => e.IsDeleted == false && e.QuestionnaireId == questionnaireId)
                    .ToListAsync();
                foreach (var dbQuestion in dbQuestions)
                {
                    if (dbQuestion.Answers != null)
                    {
                        foreach (var dbAnswer in dbQuestion.Answers)
                        {
                            dbAnswer.AnswerOptions = _context.AnswerOptions
                                .Where(e => e.IsDeleted == false && e.IdAnswer == dbAnswer.Id)
                                .ToListAsync().Result;
                         
                        }
                    }
                }

                responseDTO.Item = dbQuestions!;

            }
            catch
            {
                responseDTO.Id = 0;
                responseDTO.Message = "No se pudo obtener las preguntas para este cuestionario.";
            }

            return await Task.FromResult(responseDTO);
        }

        public async Task<ActionResult<ResponseDTO<List<QuestionType>>>> GetQuestionTypes()
        {
            var questionTypes = _context.QuestionTypes
                .Where(e => e.IsDeleted == false)
                .ToList();

            var response = new ResponseDTO<List<QuestionType>>
            {
                Id = 1,
                Message = "Solicitud realizada correctamente",
                Item = questionTypes
            };

            return await Task.FromResult(response);
        }

        public async Task<ActionResult<ResponseDTO<QuestionType>>> GetQuestionTypeById(string idType)
        {
            var questionType = _context.QuestionTypes
                .Where(e => e.IsDeleted == false)
                .FirstOrDefault(e => e.Id!.Equals(idType));

            var message = new ResponseDTO<QuestionType>
            {
                Id = 1,
                Message = "Tipo de pregunta obtenida con éxito"
            };

            if (questionType == null)
            {
                message.Id = 0;
                message.Message = "No existe la categoria que se desea obtener las subcategorias.";
            }

            return await Task.FromResult(message);
        }
    }
}
