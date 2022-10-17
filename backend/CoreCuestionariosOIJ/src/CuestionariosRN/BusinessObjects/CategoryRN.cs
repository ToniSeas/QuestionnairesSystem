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

        public ActionResult<Category> GetCategories() 
        {
            return new Category { Id = 1, Name = "test" };
        }

        public async Task<ActionResult<Category>> GetSuperHeroes()
        {
            var c = new Category { Id = 1, Name = "test" };
            return await Task.FromResult(c);
        }

    }
}
