using CuestionariosAD.Context;
using CuestionariosEntidades.EFModels;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CuestionariosAD.DataAccess
{
    public class CategoryAD
    {

        private readonly DataContext _context;

        public CategoryAD()
        {
            _context = new DataContext();
        }

        public async Task<ActionResult<List<EFCategory>>> GetCategories()
        {
            return await _context.Categories.ToListAsync();
        }

        public async Task<ActionResult<List<EFCategory>>> CreateCategory(EFCategory category)
        {
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return await _context.Categories.ToListAsync();
        }

        public async Task<ActionResult<List<EFCategory>>> UpdateCategory(EFCategory category)
        {
            var dbCategory = await _context.Categories.FindAsync(category.Id);
            if (dbCategory == null)
                throw new Exception("No existe la categoria que se desea actualizar.");

            dbCategory.Name = category.Name;
            await _context.SaveChangesAsync();
            return await _context.Categories.ToListAsync();
        }

        public async Task<ActionResult<List<EFCategory>>> DeleteCategory(int id)
        {
            var dbCategory = await _context.Categories.FindAsync(id);
            if (dbCategory == null)
                throw new Exception("No existe la categoria que se desea eliminar.");

            _context.Categories.Remove(dbCategory);
            await _context.SaveChangesAsync();

            return await _context.Categories.ToListAsync();
        }

    }
}
