using CuestionariosAD.Context;
using CuestionariosEntidades.DataTranferObjects;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Threading.Tasks;

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
            var questionnaires = _context.Questionnaires
                .Where(x => x.IsDeleted == false)
                .ToList();

            var response = new ResponseDTO<List<Questionnaire>>
            {
                Id = 1,
                Message = "Solicitud realizada correctamente",
                Item = questionnaires
            };

            return await Task.FromResult(response);
        }

        public async Task<ActionResult<ResponseDTO<Questionnaire>>> GetQuestionnaireById(int questionnaireId)
        {
            var dbQuestionnaire = await _context.Questionnaires
                .Include(e => e.Questions)
                .Where(e => e.IsDeleted == false)
                .FirstOrDefaultAsync(e => e.Id == questionnaireId);

            var message = new ResponseDTO<Questionnaire>();

            if (dbQuestionnaire == null)
            {
                message.Id = 0;
                message.Message = "No existe el cuestionario que desea obtener";
                return await Task.FromResult(message);
            }
            else
            {

                foreach (var item in dbQuestionnaire.Questions!)
                {
                    if (item.TypeId!.Equals("es"))
                    {
                        item.Options = _context.Options.Where(x => x.IdQuestionType!.Equals(item.TypeId)).ToList();
                    }
                    else if (item.TypeId!.Equals("vf"))
                    {
                        item.Options = _context.Options.Where(x => x.IdQuestionType!.Equals(item.TypeId)).ToList();
                    }
                    else
                    {
                        item.Options = _context.Options.Where(x => x.IdQuestion == item.Id).ToList();
                    }
                }
                message.Id = 1;
                message.Item = dbQuestionnaire;
            }

            return await Task.FromResult(message);

        }

        public async Task<ActionResult<ResponseDTO<List<Questionnaire>>>> SearchQuestionnaires(string name)
        {
            var questionnaires = _context.Questionnaires.
                Where(x => x.Name!.Contains(name) && x.IsDeleted == false)
                .ToList();
            var response = new ResponseDTO<List<Questionnaire>>
            {
                Id = 1,
                Message = "Solicitud realizada correctamente",
                Item = questionnaires
            };

            return await Task.FromResult(response);
        }

        public async Task<ActionResult<ResponseDTO<int>>> CreateQuestionnaire(Questionnaire questionnaire)
        {

            var responseIdQuestionnaire = new ResponseDTO<int>()
            {
                Id = 1,
                Message = "Solicitud realizada correctamente"
            };
            try
            {
                _context.Questionnaires.Add(questionnaire);
                await _context.SaveChangesAsync();
                responseIdQuestionnaire.Item = questionnaire.Id;
            }
            catch (Exception e)
            {
                responseIdQuestionnaire.Id = 0;
                responseIdQuestionnaire.Message = e.ToString();
            }

            return await Task.FromResult(responseIdQuestionnaire);
        }

        public async Task<ActionResult<MessageDTO>> UpdateQuestionnaire(Questionnaire questionnaire)
        {
            var dbQuestionnnaire = await _context.Questionnaires
                .Where(x => x.IsDeleted == false)
                .FirstOrDefaultAsync(e => e.Id == questionnaire.Id);

            var message = new MessageDTO();

            if (dbQuestionnnaire == null)
            {
                message.Id = 0;
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
            var dbQuestionnaire = await _context.Questionnaires
                .Where(x => x.IsDeleted == false)
                .FirstOrDefaultAsync(e => e.Id == id);

            var message = new MessageDTO
            {
                Id = 1,
                Message = "Cuestionario eliminado con éxito"
            };

            try
            {
                dbQuestionnaire!.IsDeleted = true;
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                message.Id = 0;
                message.Message = e.ToString();
            }

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO>> CommitQuestionnaireAnswers(Questionnaire questionnaire)
        {
            var message = new MessageDTO
            {
                Id = 1,
                Message = "Respuestas ingresadas con éxito creado con éxito"
            };

            try
            {
                foreach (Question question in questionnaire.Questions!)
                {
                    foreach (Answer answer in question.Answers!)
                    {
                        answer.QuestionId = question.Id;
                        _context.Answers.Add(answer);
                    }
                }
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                message.Id = 0;
                message.Message = e.ToString();
            }

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<ResponseDTO<List<QuestionnaireType>>>> GetQuestionnaireTypes()
        {
            var questionnairesTypes = _context.QuestionnaireTypes
                .Where(x => x.IsDeleted == false)
                .ToList();
            var response = new ResponseDTO<List<QuestionnaireType>>
            {
                Id = 1,
                Message = "Solicitud realizada correctamente",
                Item = questionnairesTypes
            };

            return await Task.FromResult(response);

        }

    }
}
