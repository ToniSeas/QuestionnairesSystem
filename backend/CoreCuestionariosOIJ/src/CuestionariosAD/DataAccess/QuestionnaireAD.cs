using CuestionariosAD.Context;
using CuestionariosEntidades.EFModels;
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

        public async Task<ActionResult<List<EFQuestionnaire>>> GetQuestionnaires()
        {
            return await _context.Questionnaires.ToListAsync();
        }

        public async Task<ActionResult<List<EFQuestionnaire>>> CreateQuestionnaire(EFQuestionnaire questionnaire)
        {
            _context.Questionnaires.Add(questionnaire);
            await _context.SaveChangesAsync();

            return await _context.Questionnaires.ToListAsync();
        }

        public async Task<ActionResult<List<EFQuestionnaire>>> UpdateQuestionnaire(EFQuestionnaire questionnaire)
        {
            var dbQuestionnaire = await _context.Questionnaires.FindAsync(questionnaire.Id);
            if (dbQuestionnaire == null)
                throw new Exception("No existe la pregunta que se desea actualizar.");

            dbQuestionnaire.Id = questionnaire.Id;
            dbQuestionnaire.Type = questionnaire.Type;
            dbQuestionnaire.Name = questionnaire.Name;
            dbQuestionnaire.ExpirationDate = questionnaire.ExpirationDate;
            dbQuestionnaire.Description = questionnaire.Description;

            await _context.SaveChangesAsync();
            return await _context.Questionnaires.ToListAsync();
        }

        public async Task<ActionResult<List<EFQuestionnaire>>> DeleteQuestionnaire(int id)
        {
            var dbQuestionnaire = await _context.Questionnaires.FindAsync(id);
            if (dbQuestionnaire == null)
                throw new Exception("No existe la pregunta que se desea eliminar.");

            _context.Questionnaires.Remove(dbQuestionnaire);
            await _context.SaveChangesAsync();

            return await _context.Questionnaires.ToListAsync();
        }

    }
}
