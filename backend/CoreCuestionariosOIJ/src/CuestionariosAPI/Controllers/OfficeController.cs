using CuestionariosEntidades.DataTranferObjects;
using CuestionariosEntidades.Models;
using CuestionariosRN.BusinessObjects;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace CuestionariosAPI.Controllers
{
    public class OfficeController
    {

        [HttpGet]
        [Route("GETOffices")]
        public async Task<ActionResult<ResponseDTO<List<Office>>>> GetOffices()
        {
            ResponseDTO<List<Office>> offices;
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync("https://localhost:7267/api/Office/Offices"))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    offices = JsonConvert.DeserializeObject<ResponseDTO<List<Office>>>(apiResponse);
                }
            }
            return await Task.FromResult(offices);
        }

    }
}
