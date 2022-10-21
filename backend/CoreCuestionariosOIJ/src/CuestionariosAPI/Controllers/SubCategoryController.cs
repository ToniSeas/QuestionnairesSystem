using CuestionariosAD.DataTranferObjects;
using CuestionariosEntidades.Models;
using CuestionariosRN.BusinessObjects;
using Microsoft.AspNetCore.Mvc;

namespace CuestionariosAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SubCategoryController : ControllerBase
    {
        private readonly SubCategoryRN subCategoryRN;

        public SubCategoryController() {

            subCategoryRN = new SubCategoryRN();
        }

        // Peticion tipo GET: api/GetSubCategories
        [HttpGet]
        [Route("GetSubCategories")]
        public async Task<ActionResult<MessageDTO<List<SubCategory>>>> GetSubCategories(int categoryId)
        {
            return await subCategoryRN.GetSubCategories(categoryId);
        }

        // Petición tipo POST: api/CreateSubCategory
        [HttpPost]
        [Route("CreateSubCategory")]
        public async Task<ActionResult<MessageDTO<List<SubCategory>>>> CreateSubCategory(SubCategory subCategory)
        {
            return await subCategoryRN.CreateSubCategory(subCategory);
        }

        //Petición tipo PUT: api/UpdateSubCategory
        [Route("UpdateSubCategory")]
        [HttpPut]
        public async Task<ActionResult<MessageDTO<List<SubCategory>>>> UpdateSubCategory(SubCategory subCategory)
        {
            return await subCategoryRN.UpdateSubCategory(subCategory);
        }

        //Petición tipo DELETE: api/DeleteSubCategory
        [HttpDelete("DeleteSubCategory/{id}")]
        public async Task<ActionResult<MessageDTO<List<SubCategory>>>> DeleteSubCategory(int id)
        {
            return await subCategoryRN.DeleteSubCategory(id);
        }

    }
}
