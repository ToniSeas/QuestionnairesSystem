using CuestionariosAD.DataAccess;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;

namespace CuestionariosRN.BusinessObjects
{
    public class SubCategoryRN
    {

        private readonly SubCategoryAD subCategoryData;

        public SubCategoryRN()
        {
            subCategoryData = new SubCategoryAD();
        }

        public async Task<ActionResult<List<SubCategory>>> GetSubCategories()
        {
            return await subCategoryData.GetSubCategories();
        }

        public async Task<ActionResult<List<SubCategory>>> CreateSubCategory(SubCategory subCategory)
        {
            return await subCategoryData.CreateSubCategory(subCategory);
        }
        public async Task<ActionResult<List<SubCategory>>> UpdateSubCategory(SubCategory subCategory)
        {
            return await subCategoryData.UpdateSubCategory(subCategory);
        }

        public async Task<ActionResult<List<SubCategory>>> DeleteSubCategory(int id)
        {
            return await subCategoryData.DeleteSubCategory(id);
        }

    }
}
