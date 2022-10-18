using CuestionariosAD.Context;
using CuestionariosEntidades.EFModels;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CuestionariosAD.DataAccess
{
    public class OptionAD
    {

        private readonly DataContext _context;

        public OptionAD()
        {
            _context = new DataContext();
        }

        public async Task<ActionResult<List<EFQuestion>>> GetQuestions()
        {
            return await _context.Questions.ToListAsync();
        }

        public async Task<ActionResult<List<EFQuestion>>> CreateQuestion(EFQuestion question)
        {
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();

            return await _context.Questions.ToListAsync();
        }

        public async Task<ActionResult<List<EFQuestion>>> UpdateQuestion(EFQuestion question)
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

        public async Task<ActionResult<List<EFQuestion>>> DeleteQuestion(int id)
        {
            var dbQuestion = await _context.Questions.FindAsync(id);
            if (dbQuestion == null)
                throw new Exception("No existe la pregunta que se desea eliminar.");

            _context.Questions.Remove(dbQuestion);
            await _context.SaveChangesAsync();

            return await _context.Questions.ToListAsync();
        }

        public async Task<ActionResult<List<EFOption>>> GetOptions()
        {
            return await _context.Options.ToListAsync();
        }

        public async Task<ActionResult<List<EFOption>>> CreateOptions(EFOption option)
        {
            _context.Options.Add(option);
            await _context.SaveChangesAsync();
            return await _context.Options.ToListAsync();
        }

        public async Task<ActionResult<List<EFOption>>> UpdateOptions(EFOption option)
        {
            var dbOption = await _context.Options.FindAsync(option.Id);
            if (dbOption == null)
                throw new Exception("No existe la opcion que se desea actualizar.");

            dbOption.Id = option.Id;
            dbOption.OptionName = option.OptionName;

            await _context.SaveChangesAsync();
            return await _context.Options.ToListAsync();
        }

        public async Task<ActionResult<List<EFOption>>> DeleteOptions(int id)
        {
            var dbOption = await _context.Options.FindAsync(id);
            if (dbOption == null)
                throw new Exception("No existe la opcion que se desea eliminar.");

            _context.Options.Remove(dbOption);
            await _context.SaveChangesAsync();

            return await _context.Options.ToListAsync();
        }

        public async Task<ActionResult<List<EFQuestionType>>> GetQuestionType()
        {
            return await _context.QuestionTypes.ToListAsync();
        }

    }
}
