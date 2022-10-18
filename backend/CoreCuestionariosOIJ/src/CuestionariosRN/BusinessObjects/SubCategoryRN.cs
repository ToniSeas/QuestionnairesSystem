using CuestionariosAD.DataAccess;
using CuestionariosEntidades.EFModels;
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

        public async Task<ActionResult<List<EFSubCategory>>> GetSubCategories()
        {
            return await subCategoryData.GetSubCategories();
        }

        public async Task<ActionResult<List<EFSubCategory>>> CreateSubCategory(EFSubCategory subCategory)
        {
            return await subCategoryData.CreateSubCategory(subCategory);
        }
        public async Task<ActionResult<List<EFSubCategory>>> UpdateSubCategory(EFSubCategory subCategory)
        {
            return await subCategoryData.UpdateSubCategory(subCategory);
        }

        public async Task<ActionResult<List<EFSubCategory>>> DeleteSubCategory(int id)
        {
            return await subCategoryData.DeleteSubCategory(id);
        }

    }
}
