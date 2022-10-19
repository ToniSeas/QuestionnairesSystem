using CuestionariosAD.Context;
using CuestionariosEntidades.EFModels;
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

        public async Task<ActionResult<List<EFSubCategory>>> GetSubCategories(int categoryId)
        {

            var dbCategory = await _context.Categories
                .Include(e => e.SubCategories)
                .FirstOrDefaultAsync(e => e.Id == categoryId);

            if (dbCategory == null)
                throw new Exception("No existe la categoria que se desea obtener las subcategorias.");

            return await Task.FromResult(dbCategory.SubCategories!.ToList());
        }

        public async Task<ActionResult<List<EFSubCategory>>> CreateSubCategory(EFSubCategory subCategory)
        {
            _context.SubCategories.Add(subCategory);
            await _context.SaveChangesAsync();

            var dbCategory = await _context.Categories
                .Include(e => e.SubCategories)
                .FirstOrDefaultAsync(e => e.Id == subCategory.IdCategory);

            if (dbCategory == null)
                throw new Exception("No existe la categoria que se desea obtener las subcategorias.");

            return await Task.FromResult(dbCategory.SubCategories!.ToList());
        }

        public async Task<ActionResult<List<EFSubCategory>>> UpdateSubCategory(EFSubCategory subCategory)
        {
            var dbSubCategory = await _context.SubCategories.FindAsync(subCategory.Id);
            if (dbSubCategory == null)
                throw new Exception("No existe la subcategoria que se desea actualizar.");

            dbSubCategory.Name = subCategory.Name;
            await _context.SaveChangesAsync();
            return await _context.SubCategories.ToListAsync();
        }

        public async Task<ActionResult<List<EFSubCategory>>> DeleteSubCategory(int id)
        {
            var dbSubCategory = await _context.SubCategories.FindAsync(id);
            if (dbSubCategory == null)
                throw new Exception("No existe la subcategoria que se desea eliminar.");

            _context.SubCategories.Remove(dbSubCategory);
            await _context.SaveChangesAsync();

            return await _context.SubCategories.ToListAsync();
        }

    }
}
