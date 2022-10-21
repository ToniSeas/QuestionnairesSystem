using CuestionariosAD.Context;
using CuestionariosAD.DataTranferObjects;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace CuestionariosAD.DataAccess
{
    public class AnswerAD
    {

        private readonly DataContext _context;

        public AnswerAD()
        {
            _context = new DataContext();
        }

        public async Task<ActionResult<MessageDTO<List<Answer>>>> GetAnswers(int idQuestion)
        {
            var dbQuestion = await _context.Questions
                .Include(e => e.Answers)
                .FirstOrDefaultAsync(e => e.Id == idQuestion);

            var message = new MessageDTO<List<Answer>>();

            if (dbQuestion == null)
            {
                message.Id = 1;
                message.Message = "No existe la pregunta que se desea obtener las respuestas.";
                return await Task.FromResult(message);
            }

            message.Item = dbQuestion.Answers!.ToList();

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO<List<Answer>>>> CreateAnswer(Answer answer)
        {
            var dbQuestion = await _context.Questions
                .FirstOrDefaultAsync(e => e.Id == answer.QuestionId);

            var message = new MessageDTO<List<Answer>>();

            if (dbQuestion == null)
            {
                message.Id = 1;
                message.Message = "No existe la pregunta.";
                return await Task.FromResult(message);
            }

            _context.Answers.Add(answer);
            await _context.SaveChangesAsync();

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO<List<Answer>>>> DeleteAnswer(int idAnswer)
        {
            var dbAnswer = await _context.Answers.FindAsync(idAnswer);

            var message = new MessageDTO<List<Answer>>();

            if (dbAnswer == null)
            {
                message.Id = 1;
                message.Message = "No existe la respuesta que se desea eliminar.";
                return await Task.FromResult(message);
            }

            _context.Answers.Remove(dbAnswer);
            await _context.SaveChangesAsync();

            message.Id = 1;
            return await Task.FromResult(message);
        }

    }
}
