using Microsoft.AspNetCore.Mvc;
using SecurityAPI.DataAccess;
using SecurityAPI.DataTransferObjects;
using SecurityAPI.Models;

namespace SecurityAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OfficeController : ControllerBase
    {
        OfficeDataAccess officeDataAccess = new OfficeDataAccess();

        [HttpGet]
        [Route("Offices")]
        public async Task<ActionResult<ResponseDTO<Office[]>>> GetOffices()
        {
            var message = new ResponseDTO<Office[]>
            {
                Item = this.officeDataAccess.offices,
                Id = 1
            };
            return await Task.FromResult(message);
        }
    }
}
