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

        public async Task<ActionResult<MessageDTO<List<Category>>>> GetCategories()
        {
            var categories = _context.Categories.ToList();
            var message = new MessageDTO<List<Category>> {
                Id = 1,
                Message = "Test",
                Item = categories
            };

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO<List<Category>>>> CreateCategory(Category category)
        {
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            var message = new MessageDTO<List<Category>>
            {
                Id = 1,
                Message = "Test"
            };

            return await Task.FromResult(message);
        }

        public async Task<ActionResult<MessageDTO<List<Category>>>> UpdateCategory(Category category)
        {
            var dbCategory = await _context.Categories.FindAsync(category.Id);

            var message = new MessageDTO<List<Category>>();

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

        public async Task<ActionResult<MessageDTO<List<Category>>>> DeleteCategory(int id)
        {
            var dbCategory = await _context.Categories
                .Include(e => e.SubCategories)
                .FirstOrDefaultAsync(e => e.Id == id);

            var message = new MessageDTO<List<Category>>();

            if (dbCategory == null) { 
                message.Id = 1;
                message.Message = "No existe la categoria que se desea actualizar.";
                return await Task.FromResult(message);
            }

            _context.Categories.Remove(dbCategory);
            await _context.SaveChangesAsync();

            message.Id = 1;
            return await Task.FromResult(message);
        }

    }
}
