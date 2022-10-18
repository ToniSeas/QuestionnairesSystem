using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using CuestionariosAD.DataAccess;

namespace CuestionariosRN.BusinessObjects
{
    public class CategoryRN
    {

        private readonly CategoryAD categoryData;

        public CategoryRN() {
            this.categoryData = new CategoryAD();
        }

        public async Task<ActionResult<List<Category>>> GetCategories()
        {
            var c = new List<Category>();
            return await Task.FromResult(c);
        }

        public async Task<ActionResult<Category>> CreateCategory(Category category)
        {
            var c = new Category { Id = 1, Name = "test" };
            return await Task.FromResult(c);
        }
        public async Task<ActionResult<Category>> UpdateCategory(int id, Category category)
        {
            var c = new Category { Id = 1, Name = "test" };
            return await Task.FromResult(c);
        }
        public async Task<ActionResult<String>> DeleteCategory(int id)
        {
            var s = "Delete";
            return await Task.FromResult(s);
        }


    }
}
