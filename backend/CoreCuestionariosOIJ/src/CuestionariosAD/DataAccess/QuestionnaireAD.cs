using CuestionariosAD.Context;
using CuestionariosEntidades.DataTranferObjects;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace CuestionariosAD.DataAccess
{
    public class QuestionnaireAD
    {

        private readonly DataContext _context;

        public QuestionnaireAD()
        {
            _context = new DataContext();
        }

        public async Task<ActionResult<ResponseDTO<List<Questionnaire>>>> GetQuestionnaires()
        {
            var questionnaires = _context.Questionnaires.ToList();
            var response = new ResponseDTO<List<Questionnaire>>
            {
                Id = 1,
                Message = "Test",
                Item = questionnaires
            };

            return await Task.FromResult(response);
        }

        public async Task<ActionResult<Questionnaire>> CreateQuestionnaire(Questionnaire questionnaire)
        {
            try
            {
                _context.Questionnaires.Add(questionnaire);
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                questionnaire.Name = e.ToString();
            }
            
            var message = new MessageDTO
            {
                Id = 1,
                Message = "Test"
            };

            return await Task.FromResult(questionnaire);
        }

        public async Task<ActionResult<MessageDTO>> UpdateQuestionnaire(Questionnaire questionnaire)
        {
            var dbQuestionnnaire = await _context.Questionnaires.FindAsync(questionnaire.Id);

            var message = new MessageDTO();

            if (dbQuestionnnaire == null)
            {
                message.Id = 1;
                message.Message = "No existe el cuestionario que se desea actualizar.";
                return await Task.FromResult(message);
            }

            dbQuestionnnaire.Name = questionnaire.Name;
            await _context.SaveChangesAsync();

            message.Id = 1;
            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO>> DeleteQuestionnaire(int id)
        {
            var dbQuestionnaire = await _context.Questionnaires.FirstOrDefaultAsync(e => e.Id == id);

            var message = new MessageDTO();

            if (dbQuestionnaire == null)
            {
                message.Id = 1;
                message.Message = "No existe el cuestionario que desea eliminar.";
                return await Task.FromResult(message);
            }

            _context.Questionnaires.Remove(dbQuestionnaire);
            await _context.SaveChangesAsync();

            message.Id = 1;
            return await Task.FromResult(message);
        }

    }
}
