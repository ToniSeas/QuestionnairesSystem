using Microsoft.AspNetCore.Mvc;
using SecurityAPI.DataAccess;
using SecurityAPI.DataTransferObjects;
using SecurityAPI.Models;

namespace SecurityAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        UserDataAccess userDataAccess = new UserDataAccess();

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<ResponseDTO<User>>> AutenticateUser(User user)
        {
            User toReturn = null;
            string errorMessage = "";
            bool found = false;
            foreach (User tempUser in this.userDataAccess.users)
            {
                if (tempUser.userName == user.userName)
                {
                    found = true;
                    toReturn = tempUser;
                }
            }
            if (toReturn != null && !toReturn.password.Equals(user.password))
            {
                errorMessage = "Contraseña incorrecta";
                toReturn = null;
            }
            if (!found)
            {
                errorMessage = "No existe este usuario";
            }
            var message = new ResponseDTO<User>();
            if (toReturn == null)
            {
                message.Id = 0;
                message.Message = errorMessage;
                return await Task.FromResult(message);
            }
            else
            {
                message.Id = 1;
                message.Item = toReturn;
            }
            return await Task.FromResult(message);
        }
    }


}
