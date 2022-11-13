using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class User
    {

        public User(String name, String userName, String password, String role, int idOffice, int id)
        {
            this.UserName = userName;
            this.Password = password;
            this.Role = role;
            this.IdOffice = idOffice;
            this.Name = name;
            Id = id;
        }
        public String UserName { get; set; }

        public String Password { get; set; }

        public String Role { get; set; }

        public int IdOffice { get; set; }

        public String Name { get; set; }

        public int Id { get; set; }
    }
}
