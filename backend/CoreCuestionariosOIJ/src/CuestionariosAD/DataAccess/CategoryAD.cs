using CuestionariosAD.Context;
using CuestionariosEntidades.DataTranferObjects;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace CuestionariosAD.DataAccess
{
    public class CategoryAD
    {

        private readonly DataContext _context;

        public CategoryAD()
        {
            _context = new DataContext();
        }

        public async Task<ActionResult<ResponseDTO<List<Category>>>> GetCategories()
        {
            var categories = _context.Categories
                .Where(e => e.IsDeleted == false)
                .ToList();
            var responseDTO = new ResponseDTO<List<Category>> {
                Id = 1,
                Message = "Solicitud realizada correctamente",
                Item = categories
            };

            return await Task.FromResult(responseDTO);
        }

        public async Task<ActionResult<MessageDTO>> CreateCategory(Category category)
        {
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            var message = new MessageDTO
            {
                Id = 1,
                Message = "Solicitud realizada correctamente"
            };

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO>> UpdateCategory(Category category)
        {
            var dbCategory = await _context.Categories.FindAsync(category.Id);

            var message = new MessageDTO();

            if (dbCategory == null) {
                message.Id = 1;
                message.Message = "No existe la categoria que se desea actualizar.";
                return await Task.FromResult(message);
            }

            dbCategory.Name = category.Name;
            await _context.SaveChangesAsync();

            message.Id = 1;
            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO>> DeleteCategory(int id)
        {
            var dbCategory = await _context.Categories
                .Include(e => e.SubCategories)
                .Where(e => e.IsDeleted == false)
                .FirstOrDefaultAsync(e => e.Id == id);

            var message = new MessageDTO();

            if (dbCategory == null) {
                message.Id = 1;
                message.Message = "No existe la categoria que se desea actualizar.";
                return await Task.FromResult(message);
            }

            dbCategory.IsDeleted = true;
            await _context.SaveChangesAsync();

            message.Id = 1;
            message.Message = "Solicitud realizada correctamente.";
            return await Task.FromResult(message);
        }

    }
}
