using CuestionariosAD.Context;
using CuestionariosEntidades.DataTranferObjects;
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

        public async Task<ActionResult<ResponseDTO<Option>>> GetOptionById(int optionId)
        {
            var dbOption = _context.Options
                .Where(e => e.IsDeleted == false)
                .FirstOrDefaultAsync(e => e.Id == optionId);
            var responseDTO = new ResponseDTO<Option>();

            if (dbOption == null)
            {
                responseDTO.Id = 0;
                responseDTO.Message = "No existe la opcion que desea obtener";
                return await Task.FromResult(responseDTO);
            }
            else
            {
                responseDTO.Id = 1;
                responseDTO.Item = dbOption.Result;
            };

            return await Task.FromResult(responseDTO);

        }

    }
}
