using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using CuestionariosAD.DataAccess;
using CuestionariosEntidades.EFModels;

namespace CuestionariosRN.BusinessObjects
{
    public class CategoryRN
    {

        private readonly CategoryAD categoryData;

        public CategoryRN() {
            categoryData = new CategoryAD();
        }

        public async Task<ActionResult<List<EFCategory>>> GetCategories()
        {
            return await categoryData.GetCategories();
        }

        public async Task<ActionResult<List<EFCategory>>> CreateCategory(EFCategory category)
        {
            return await categoryData.CreateCategory(category);
        }
        public async Task<ActionResult<List<EFCategory>>> UpdateCategory(EFCategory category)
        {
            return await categoryData.UpdateCategory(category);
        }

        public async Task<ActionResult<List<EFCategory>>> DeleteCategory(int id)
        {
            return await categoryData.DeleteCategory(id);
        }

    }
}
