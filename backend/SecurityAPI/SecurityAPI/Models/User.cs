
namespace SecurityAPI.Models
{
    public class User
    {

        public User(String name, String userName, String password, String role, int[] idOffices, int id)
        {
            this.UserName = userName;
            this.Password = password;
            this.Role = role;
            this.IdOffices = idOffices;
            this.Name = name;
            Id = id;
        }
        public String UserName { get; set; }

        public String Password { get; set; }

        public String Role { get; set; }

        public int[] IdOffices { get; set; }

        public String Name { get; set; }

        public int Id { get; set; }
    }

}