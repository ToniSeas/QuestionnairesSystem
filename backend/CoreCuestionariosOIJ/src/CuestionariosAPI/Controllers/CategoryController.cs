using CuestionariosEntidades.Models;
using CuestionariosRN.BusinessObjects;
using Microsoft.AspNetCore.Mvc;

namespace CuestionariosAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : ControllerBase
    {

        [HttpGet]
        [Route("getCategories")]

        public async Task<ActionResult<List<Category>>> GetCategories()
        {
            var c = new CategoryRN();
            return Ok(c.GetCategories());
        }

        //[HttpDelete("{id}")]
        //[HttpPost]
        //[HttpPut]
        //[HttpDelete]

    }
}
