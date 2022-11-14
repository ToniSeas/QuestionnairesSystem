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
    public class ReviewerAD
    {

        private readonly DataContext _context;

        public ReviewerAD()
        {
            _context = new DataContext();
        }

        public async Task<ActionResult<ResponseDTO<List<ReviewerQuestionnaire>>>> GetReviewersQuestionnaire(int idQuestionnaire)
        {
            var dbQuestionnaire = await _context.Questionnaires
                .Include(e => e.ReviewersQuestionnaire)
                .Where(e => e.IsDeleted == false)
                .FirstOrDefaultAsync(e => e.Id == idQuestionnaire);

            var responseReviewers = new ResponseDTO<List<ReviewerQuestionnaire>>();

            if (dbQuestionnaire == null)
            {
                responseReviewers.Id = 0;
                responseReviewers.Message = "No existe el cuestionario que se desea obtener los revisores.";
                return await Task.FromResult(responseReviewers);
            }

            responseReviewers.Item = dbQuestionnaire.ReviewersQuestionnaire!
                .Where(e => e.IsDeleted == false)
                .ToList();

            return await Task.FromResult(responseReviewers);
        }

        public async Task<ActionResult<MessageDTO>> CreateReviewerQuestionnaire(ReviewerQuestionnaire reviewerQuestionnaire)
        {

            var messageDTO = new MessageDTO()
            {
                Id = 1,
                Message = "Solicitud realizada correctamente"
            };
            try
            {
                _context.ReviewerQuestionnaires.Add(reviewerQuestionnaire);
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                messageDTO.Id = 0;
                messageDTO.Message = e.ToString();
            }

            return await Task.FromResult(messageDTO);
        }
    }
}
