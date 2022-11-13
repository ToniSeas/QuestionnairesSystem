using Microsoft.AspNetCore.Mvc;
using SecurityAPI.DataTransferObjects;
using SecurityAPI.Models;

namespace SecurityAPI.DataAccess
{
    public class UserDataAccess
    {
        public User[] users { get; set; }

        public UserDataAccess()
        {
            this.users = new User[3];
            this.users[0] = new User("Juan SysAdmin", "sysadmin", "12345", "SADMIN", 1, 0);
            this.users[1] = new User("John Admin", "admin", "12345", "ADMIN", 2, 1);
            this.users[2] = new User("Felipe Reviewer", "reviewer", "12345", "REVIEWER", 3, 2);
        }

        internal User[] getUsersByOffice(int officeId)
        {
            List<User> usersFromOffice = new List<User>();

            for (int i = 0; i < this.users.Length; i++)
            {
                if (this.users[i].IdOffice == officeId)
                {
                    usersFromOffice.Add(this.users[i]);
                }
            }

            return usersFromOffice.ToArray();
        }
    }
}