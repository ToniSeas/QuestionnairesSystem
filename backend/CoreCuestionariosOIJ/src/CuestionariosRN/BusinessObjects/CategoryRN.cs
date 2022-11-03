using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using CuestionariosAD.DataAccess;
using CuestionariosEntidades.DataTranferObjects;

namespace CuestionariosRN.BusinessObjects
{
    public class CategoryRN
    {

        private readonly CategoryAD categoryData;

        public CategoryRN() {
            categoryData = new CategoryAD();
        }
        public async Task<ActionResult<ResponseDTO<List<Category>>>> GetCategories()
        {
            return await categoryData.GetCategories();
        }

        public async Task<ActionResult<MessageDTO>> CreateCategory(Category category)
        {
            return await categoryData.CreateCategory(category);
        }
        public async Task<ActionResult<MessageDTO>> UpdateCategory(Category category)
        {
            return await categoryData.UpdateCategory(category);
        }

        public async Task<ActionResult<MessageDTO>> DeleteCategory(int id)
        {
            return await categoryData.DeleteCategory(id);
        }
        
    }
}
