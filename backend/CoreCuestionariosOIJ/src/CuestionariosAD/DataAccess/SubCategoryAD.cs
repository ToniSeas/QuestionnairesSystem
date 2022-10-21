using CuestionariosAD.Context;
using CuestionariosAD.DataTranferObjects;
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

        public async Task<ActionResult<MessageDTO<List<SubCategory>>>> GetSubCategories(int categoryId)
        {

            var dbCategory = await _context.Categories
                .Include(e => e.SubCategories)
                .FirstOrDefaultAsync(e => e.Id == categoryId);

            var message = new MessageDTO<List<SubCategory>>();

            if (dbCategory == null)
            {
                message.Id = 1;
                message.Message = "No existe la categoria que se desea obtener las subcategorias.";
                return await Task.FromResult(message);
            }

            message.Item = dbCategory.SubCategories!.ToList();

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO<List<SubCategory>>>> CreateSubCategory(SubCategory subCategory)
        {
            var dbCategory = await _context.Categories
                .Include(e => e.SubCategories)
                .FirstOrDefaultAsync(e => e.Id == subCategory.IdCategory);

            var message = new MessageDTO<List<SubCategory>>();

            if (dbCategory == null)
            {
                message.Id = 1;
                message.Message = "No existe la categoria que se desea obtener las subcategorias.";
                return await Task.FromResult(message);
            }

            _context.SubCategories.Add(subCategory);
            await _context.SaveChangesAsync();

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO<List<SubCategory>>>> UpdateSubCategory(SubCategory subCategory)
        {
            var dbSubCategory = await _context.SubCategories.FindAsync(subCategory.Id);

            var message = new MessageDTO<List<SubCategory>>();

            if (dbSubCategory == null)
            {
                message.Id = 1;
                message.Message = "No existe la subcategoria que se desea actualizar.";
                return await Task.FromResult(message);
            }

            dbSubCategory.Name = subCategory.Name;
            await _context.SaveChangesAsync();

            message.Id = 1;
            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO<List<SubCategory>>>> DeleteSubCategory(int id)
        {
            var dbSubCategory = await _context.SubCategories.FindAsync(id);

            var message = new MessageDTO<List<SubCategory>>();

            if (dbSubCategory == null)
            {
                message.Id = 1;
                message.Message = "No existe la subcategoria que se desea eliminar.";
                return await Task.FromResult(message);
            }

            _context.SubCategories.Remove(dbSubCategory);
            await _context.SaveChangesAsync();

            message.Id = 1;
            return await Task.FromResult(message);
        }

    }
}
