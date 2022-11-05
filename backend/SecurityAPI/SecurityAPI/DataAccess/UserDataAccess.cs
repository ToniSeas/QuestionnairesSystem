using SecurityAPI.Models;

namespace SecurityAPI.DataAccess
{
    public class UserDataAccess
    {
        public User[] users { get; set; }

        public UserDataAccess()
        {
            this.users = new User[3];
            this.users[0] = new User("sysadmin", "12345", "SADMIN");
            this.users[1] = new User("admin", "12345", "ADMIN");
            this.users[2] = new User("reviewer", "12345", "REVIEWER");
        }
    }
}
