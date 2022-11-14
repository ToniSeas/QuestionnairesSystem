using CuestionariosEntidades.DataTranferObjects;
using CuestionariosEntidades.Models;
using CuestionariosRN.BusinessObjects;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;

namespace CuestionariosAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult<ResponseDTO<User>>> AutenticateUser(UserToSend userToSend)
        {
            var message = new ResponseDTO<User>();
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.PostAsync("https://localhost:7267/api/User/Login", new StringContent(JsonConvert.SerializeObject(userToSend), Encoding.UTF8, "application/json")))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    message = JsonConvert.DeserializeObject<ResponseDTO<User>>(apiResponse);
                }
            }

            return await Task.FromResult(message);
        }

        [HttpGet]
        [Route("GetUsersByOffice")]
        public async Task<ActionResult<ResponseDTO<List<User>>>> GetUsersByOffice(int officeId)
        {
            ResponseDTO<List<User>> users;
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync("https://localhost:7267/api/User/UsersByOffice?officeId="+officeId))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    users = JsonConvert.DeserializeObject<ResponseDTO<List<User>>>(apiResponse);
                }
            }

            return await Task.FromResult(users);
        }

    }
}
