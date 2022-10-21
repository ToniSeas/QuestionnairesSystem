using CuestionariosAD.Context;
using CuestionariosAD.DataTranferObjects;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CuestionariosAD.DataAccess
{
    public class QuestionnaireAD
    {

        private readonly DataContext _context;

        public QuestionnaireAD()
        {
            _context = new DataContext();
        }

        public async Task<ActionResult<MessageDTO<List<Questionnaire>>>> GetQuestionnaires()
        {
            //return await _context.Questionnaires.ToListAsync();
            return await Task.FromResult(new MessageDTO<List<Questionnaire>>());
        }

        public async Task<ActionResult<MessageDTO<List<Questionnaire>>>> CreateQuestionnaire(Questionnaire questionnaire)
        {
            /*
            var q = new Questionnaire();

            var question = new Question();

            _context.Questionnaires.Add(q);
            await _context.SaveChangesAsync();

            return await Task.FromResult(new List<Questionnaire>());
            */
            return await Task.FromResult(new MessageDTO<List<Questionnaire>>());
        }

        public async Task<ActionResult<MessageDTO<List<Questionnaire>>>> UpdateQuestionnaire(Questionnaire questionnaire)
        {
            /*
            var dbQuestionnaire = await _context.Questionnaires.FindAsync(questionnaire.Id);
            if (dbQuestionnaire == null)
                throw new Exception("No existe la pregunta que se desea actualizar.");

            dbQuestionnaire.Id = questionnaire.Id;
            dbQuestionnaire.Name = questionnaire.Name;
            dbQuestionnaire.ExpirationDate = questionnaire.ExpirationDate;
            dbQuestionnaire.Description = questionnaire.Description;

            await _context.SaveChangesAsync();
            return await _context.Questionnaires.ToListAsync();
            */
            return await Task.FromResult(new MessageDTO<List<Questionnaire>>());
        }

        public async Task<ActionResult<MessageDTO<List<Questionnaire>>>> DeleteQuestionnaire(int id)
        {
            /*
            var dbQuestionnaire = await _context.Questionnaires.FindAsync(id);
            if (dbQuestionnaire == null)
                throw new Exception("No existe la pregunta que se desea eliminar.");

            _context.Questionnaires.Remove(dbQuestionnaire);
            await _context.SaveChangesAsync();

            return await _context.Questionnaires.ToListAsync(); */

            return await Task.FromResult(new MessageDTO<List<Questionnaire>>());
        }

    }
}
