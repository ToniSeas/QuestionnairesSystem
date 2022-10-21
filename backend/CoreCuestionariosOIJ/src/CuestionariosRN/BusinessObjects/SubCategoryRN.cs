using CuestionariosAD.DataAccess;
using CuestionariosEntidades.DataTranferObjects;
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

        public async Task<ActionResult<MessageDTO<List<SubCategory>>>> GetSubCategories(int categoryId)
        {
            return await subCategoryData.GetSubCategories(categoryId);
        }

        public async Task<ActionResult<MessageDTO<List<SubCategory>>>> CreateSubCategory(SubCategory subCategory)
        {
            return await subCategoryData.CreateSubCategory(subCategory);
        }
        public async Task<ActionResult<MessageDTO<List<SubCategory>>>> UpdateSubCategory(SubCategory subCategory)
        {
            return await subCategoryData.UpdateSubCategory(subCategory);
        }

        public async Task<ActionResult<MessageDTO<List<SubCategory>>>> DeleteSubCategory(int id)
        {
            return await subCategoryData.DeleteSubCategory(id);
        }

    }
}
