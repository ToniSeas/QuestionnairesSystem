using CuestionariosAD.Context;
using CuestionariosEntidades.DataTranferObjects;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CuestionariosAD.DataAccess
{
    public class SubCategoryAD
    {

        private readonly DataContext _context;

        public SubCategoryAD()
        {
           _context = new DataContext();
        }

        public async Task<ActionResult<ResponseDTO<List<SubCategory>>>> GetSubCategories(int categoryId)
        {

            var dbCategory = await _context.Categories
                .Include(e => e.SubCategories)
                .Where(e => e.IsDeleted == false)
                .FirstOrDefaultAsync(e => e.Id == categoryId);

            var message = new ResponseDTO<List<SubCategory>>();

            if (dbCategory == null)
            {
                message.Id = 0;
                message.Message = "No existe la categoria que se desea obtener las subcategorias.";
                return await Task.FromResult(message);
            }

            message.Item = dbCategory.SubCategories!
                .Where(e => e.IsDeleted == false)
                .ToList();

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO>> CreateSubCategory(SubCategory subCategory)
        {
            var dbCategory = await _context.Categories
                .Where(e => e.IsDeleted == false)
                .FirstOrDefaultAsync(e => e.Id == subCategory.IdCategory);

            var message = new MessageDTO
            {
                Id = 1,
                Message = "SubCategoria creada con éxito"
            };
            try
            {
                _context.SubCategories.Add(subCategory);
                await _context.SaveChangesAsync();
            }
            catch
            {
                message.Id = 0;
                message.Message = "No existe la categoria que se desea obtener las subcategorias.";
            }

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO>> UpdateSubCategory(SubCategory subCategory)
        {
            var dbSubCategory = await _context.SubCategories
                .Where(e => e.IsDeleted == false)
                .FirstOrDefaultAsync(e => e.Id == subCategory.Id);

            var message = new MessageDTO();

            if (dbSubCategory == null)
            {
                message.Id = 0;
                message.Message = "No existe la subcategoria que se desea actualizar.";
                return await Task.FromResult(message);
            }

            dbSubCategory.Name = subCategory.Name;
            await _context.SaveChangesAsync();

            message.Id = 1;
            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO>> DeleteSubCategory(int id)
        {
            var dbSubCategory = await _context.SubCategories
                .Where(e => e.IsDeleted == false)
                .FirstOrDefaultAsync(e => e.Id == id);
            
            var message = new MessageDTO();

            if (dbSubCategory == null)
            {
                message.Id = 0;
                message.Message = "No existe la subcategoria que se desea eliminar.";
                return await Task.FromResult(message);
            }

            dbSubCategory.IsDeleted = true;
            await _context.SaveChangesAsync();

            message.Id = 1;
            return await Task.FromResult(message);
        }

    }
}
