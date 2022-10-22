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

        public async Task<ActionResult<MessageDTO<List<Question>>>> GetQuestions(int idQuestionnaire)
        {
            var dbQuestionnaire = await _context.Questionnaires
                .FirstOrDefaultAsync(e => e.Id == idQuestionnaire);

            var message = new MessageDTO<List<Question>>();

            if (dbQuestionnaire == null)
            {
                message.Id = 1;
                message.Message = "No existe el cuestionario que se desea obtener las preguntas.";
                return await Task.FromResult(message);
            }

            message.Item = dbQuestionnaire.Questions!.ToList();

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO<List<Question>>>> CreateQuestion(Question question)
        {
            var dbQuestionnaire = await _context.Questionnaires
                .FirstOrDefaultAsync(e => e.Id == question.QuestionnaireId);

            var message = new MessageDTO<List<Question>>();

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

        public async Task<ActionResult<MessageDTO<List<Question>>>> UpdateQuestion(Question question)
        {
            var dbQuestion = await _context.Questions.FindAsync(question.Id);

            var message = new MessageDTO<List<Question>>();

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

        public async Task<ActionResult<MessageDTO<List<Question>>>> DeleteQuestion(int id)
        {
            var dbQuestion = await _context.Questions.FindAsync(id);

            var message = new MessageDTO<List<Question>>();

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

        public async Task<ActionResult<MessageDTO<List<Option>>>> GetOptions(int idQuestion)
        {
            var dbQuestion = await _context.Questions
                .Include(e => e.Options)
                .FirstOrDefaultAsync(e => e.Id == idQuestion);

            var message = new MessageDTO<List<Option>>();

            if (dbQuestion == null)
            {
                message.Id = 1;
                message.Message = "No existe la pregunta que se desea obtener las opciones.";
                return await Task.FromResult(message);
            }

            message.Item = dbQuestion.Options!.ToList();

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO<List<Option>>>> CreateOption(Option option)
        {
            var dbOption = await _context.Questions
                .Include(e => e.Options)
                .FirstOrDefaultAsync(e => e.Id == option.Id);

            var message = new MessageDTO<List<Option>>();

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

        public async Task<ActionResult<MessageDTO<List<Option>>>> UpdateOption(Option option)
        {
            var dbOption = await _context.Options.FindAsync(option.Id);

            var message = new MessageDTO<List<Option>>();

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

        public async Task<ActionResult<MessageDTO<List<Option>>>> DeleteOption(int idOption)
        {
            var dbOption = await _context.Options.FindAsync(idOption);

            var message = new MessageDTO<List<Option>>();

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

    

    public async Task<ActionResult<MessageDTO<List<QuestionType>>>> GetQuestionType()
        {
            var questionTypes = _context.QuestionTypes.ToList();
            var message = new MessageDTO<List<QuestionType>>
            {
                Id = 1,
                Message = "Test",
                Item = questionTypes
            };

            return await Task.FromResult(message);
        }

    }
}
