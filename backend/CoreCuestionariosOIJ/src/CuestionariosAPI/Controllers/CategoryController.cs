using CuestionariosEntidades.Models;
using CuestionariosRN.BusinessObjects;
using Microsoft.AspNetCore.Mvc;

namespace CuestionariosAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly CategoryRN categoryRN;

        public CategoryController() {

            categoryRN = new CategoryRN();
        }

        // Peticion tipo GET: api/GetCategories
        [HttpGet]
        [Route("GetCategories")]
        public async Task<ActionResult<List<Category>>> GetCategories()
        {
            return await categoryRN.GetCategories();
        }

        // Petición tipo POST: api/CreateCategory
        [HttpPost]
        [Route("CreateCategory")]
        public async Task<ActionResult<Category>> CreateCategory(Category category)
        {
            return await categoryRN.CreateCategory(category);
        }
        
        //Petición tipo PUT: api/UpdateCategory
        [HttpPut("{id, category}")]
        //[Route("UpdateCategory")]
        public async Task<ActionResult<Category>> UpdateCategory(int id, Category category)
        {
            return await categoryRN.UpdateCategory(id, category);
        }

        //Petición tipo DELETE: api/DeleteCategory
        [HttpDelete("{id}")]
        //[Route("DeleteCategory")]
        public async Task<ActionResult<String>> DeleteCategory(int id)
        {
            return await categoryRN.DeleteCategory(id);
        }

    }
}

