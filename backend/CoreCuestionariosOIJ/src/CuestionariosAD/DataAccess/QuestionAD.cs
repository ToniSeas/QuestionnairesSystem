using CuestionariosAD.Context;
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

        public async Task<ActionResult<List<Question>>> GetQuestions()
        {
            return await _context.Questions.ToListAsync();
        }

        public async Task<ActionResult<List<Question>>> CreateQuestion(Question question)
        {
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();

            return await _context.Questions.ToListAsync();
        }

        public async Task<ActionResult<List<Question>>> UpdateQuestion(Question question)
        {
            var dbQuestion = await _context.Questions.FindAsync(question.Id);
            if (dbQuestion == null)
                throw new Exception("No existe la pregunta que se desea actualizar.");

            dbQuestion.Statement = question.Statement;
            dbQuestion.Label = question.Label;
            dbQuestion.Position = question.Position;

            await _context.SaveChangesAsync();
            return await _context.Questions.ToListAsync();
        }

        public async Task<ActionResult<List<Question>>> DeleteQuestion(int id)
        {
            var dbQuestion = await _context.Questions.FindAsync(id);
            if (dbQuestion == null)
                throw new Exception("No existe la pregunta que se desea eliminar.");

            _context.Questions.Remove(dbQuestion);
            await _context.SaveChangesAsync();

            return await _context.Questions.ToListAsync();
        }

        public async Task<ActionResult<List<Option>>> GetOptions()
        {
            return await _context.Options.ToListAsync();
        }

        public async Task<ActionResult<List<Option>>> CreateOptions(Option option)
        {
            _context.Options.Add(option);
            await _context.SaveChangesAsync();
            return await _context.Options.ToListAsync();
        }

        public async Task<ActionResult<List<Option>>> UpdateOptions(Option option)
        {
            var dbOption = await _context.Options.FindAsync(option.Id);
            if (dbOption == null)
                throw new Exception("No existe la opcion que se desea actualizar.");

            dbOption.Id = option.Id;
            dbOption.OptionName = option.OptionName;

            await _context.SaveChangesAsync();
            return await _context.Options.ToListAsync();
        }

        public async Task<ActionResult<List<Option>>> DeleteOptions(int id)
        {
            var dbOption = await _context.Options.FindAsync(id);
            if (dbOption == null)
                throw new Exception("No existe la opcion que se desea eliminar.");

            _context.Options.Remove(dbOption);
            await _context.SaveChangesAsync();

            return await _context.Options.ToListAsync();
        }

        public async Task<ActionResult<List<QuestionType>>> GetQuestionType()
        {
            return await _context.QuestionTypes.ToListAsync();
        }

    }
}
