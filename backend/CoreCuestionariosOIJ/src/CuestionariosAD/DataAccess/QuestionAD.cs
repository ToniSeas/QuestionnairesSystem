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

        public async Task<ActionResult<ResponseDTO<List<Question>>>> GetQuestions(int idQuestionnaire)
        {
            var dbQuestionnaire = await _context.Questionnaires
                .FirstOrDefaultAsync(e => e.Id == idQuestionnaire);

            var message = new ResponseDTO<List<Question>>();

            if (dbQuestionnaire == null)
            {
                message.Id = 1;
                message.Message = "No existe el cuestionario que se desea obtener las preguntas.";
                return await Task.FromResult(message);
            }

            message.Item = dbQuestionnaire.Questions!.ToList();

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO>> CreateQuestion(Question question)
        {
            var dbQuestionnaire = await _context.Questionnaires
                .FirstOrDefaultAsync(e => e.Id == question.QuestionnaireId);

            var message = new MessageDTO();

            if (dbQuestionnaire == null)
            {
                message.Id = 1;
                message.Message = "No existe el cuestionario que se desea obtener las preguntas.";
                return await Task.FromResult(message);
            }

            _context.Questions.Add(question);
            await _context.SaveChangesAsync();

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO>> UpdateQuestion(Question question)
        {
            var dbQuestion = await _context.Questions.FindAsync(question.Id);

            var message = new MessageDTO();

            if (dbQuestion == null)
            {
                message.Id = 1;
                message.Message = "No existe la pregunta que se desea actualizar.";
                return await Task.FromResult(message);
            }

            dbQuestion.Statement = question.Statement;
            dbQuestion.Label = question.Label;
            dbQuestion.Position = question.Position;
            dbQuestion.CategoryId = question.CategoryId;
            dbQuestion.SubCategoryId = question.SubCategoryId;
            dbQuestion.TypeId = question.TypeId;
            dbQuestion.IsOptional = question.IsOptional;

            await _context.SaveChangesAsync();

            message.Id = 1;
            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO>> DeleteQuestion(int id)
        {
            var dbQuestion = await _context.Questions.FindAsync(id);

            var message = new MessageDTO();

            if (dbQuestion == null)
            {
                message.Id = 1;
                message.Message = "No existe la pregunta que se desea eliminar.";
                return await Task.FromResult(message);
            }

            _context.Questions.Remove(dbQuestion);
            await _context.SaveChangesAsync();

            message.Id = 1;
            return await Task.FromResult(message);
        }

        public async Task<ActionResult<ResponseDTO<List<Option>>>> GetOptions(int idQuestion)
        {
            var dbQuestion = await _context.Questions
                .FirstOrDefaultAsync(e => e.Id == idQuestion);

            var message = new ResponseDTO<List<Option>>();

            if (dbQuestion == null)
            {
                message.Id = 1;
                message.Message = "No existe la pregunta que se desea obtener las opciones.";
                return await Task.FromResult(message);
            }

            message.Item = dbQuestion.Options!.ToList();

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO>> CreateOption(Option option)
        {
            var dbOption = await _context.Questions
                .FirstOrDefaultAsync(e => e.Id == option.Id);

            var message = new MessageDTO();

            if (dbOption == null)
            {
                message.Id = 1;
                message.Message = "No existe la pregunta que se desea obtener las opciones.";
                return await Task.FromResult(message);
            }

            _context.Options.Add(option);
            await _context.SaveChangesAsync();

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO>> UpdateOption(Option option)
        {
            var dbOption = await _context.Options.FindAsync(option.Id);

            var message = new MessageDTO();

            if (dbOption == null)
            {
                message.Id = 1;
                message.Message = "No existe la opcion que se desea actualizar.";
                return await Task.FromResult(message);
            }

            dbOption.OptionName = option.OptionName;
            await _context.SaveChangesAsync();

            message.Id = 1;
            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO>> DeleteOption(int idOption)
        {
            var dbOption = await _context.Options.FindAsync(idOption);

            var message = new MessageDTO();

            if (dbOption == null)
            {
                message.Id = 1;
                message.Message = "No existe la opcion que se desea eliminar.";
                return await Task.FromResult(message);
            }

            _context.Options.Remove(dbOption);
            await _context.SaveChangesAsync();

            message.Id = 1;
            return await Task.FromResult(message);
        }

        public async Task<ActionResult<ResponseDTO<List<QuestionType>>>> GetQuestionTypes()
        {
            var questionTypes = _context.QuestionTypes.ToList();
            var response = new ResponseDTO<List<QuestionType>>
            {
                Id = 1,
                Message = "Test",
                Item = questionTypes
            };
            return await Task.FromResult(response);
        }

        public async Task<ActionResult<ResponseDTO<QuestionType>>> GetQuestionTypeById(int idType)
        {
            var questionType = _context.QuestionTypes.FirstOrDefault(e => e.Id == idType);
            var message = new ResponseDTO<QuestionType>
            {
                Id = 1,
                Message = "Test",
                Item = questionType
            };

            return await Task.FromResult(message); ;
        }
    }
}
