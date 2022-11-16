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
        OfficeDataAccess officeDataAccess = new OfficeDataAccess();

        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult<ResponseDTO<User>>> AutenticateUser(UserToSend userToSend)
        {
            User toReturn = null;
            string errorMessage = "";
            bool found = false;
            foreach (User tempUser in this.userDataAccess.users)
            {
                if (tempUser.UserName == userToSend.UserName)
                {
                    found = true;
                    toReturn = tempUser;
                }
            }
            if (toReturn != null && !toReturn.Password.Equals(userToSend.Password))
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

        [HttpGet]
        [Route("UsersByOffice")]
        public async Task<ActionResult<ResponseDTO<User[]>>> GetUsersByOffice(int officeId)
        {

            Console.WriteLine(officeId);
            var message = new ResponseDTO<User[]>
            {
                Item = this.userDataAccess.getUsersByOffice(officeId),
                Id = 1
            };
            return await Task.FromResult(message);
        }

        [HttpPost]
        [Route("GetOfficeByUser")]
        public async Task<ActionResult<ResponseDTO<Office[]>>> GetOfficeByUser(int userId)
        {
            List<Office> offices = new List<Office>();
            bool found = false;
            foreach (User tempUser in this.userDataAccess.users)
            {
                if (tempUser.Id == userId)  //Encontrar al usuario
                {
                    found = true;
                    foreach (Office tempOffice in this.officeDataAccess.offices)
                    {
                        foreach (int tempOfficeId in tempUser.IdOffices) 
                        {
                            if (tempOffice.id == tempOfficeId) //Encontrar la oficina
                            {
                                offices.Add(tempOffice);
                            }           
                        }
                    }
                }
            }
            var message = new ResponseDTO<Office[]>();
            if (!found)
            {
                message.Id = 0;
                message.Message = "No se encontró el usuario";
                return await Task.FromResult(message);
            }
            else
            {
                message.Id = 1;
                message.Item = offices.ToArray();
            }

            return await Task.FromResult(message);
        }
    }
}
