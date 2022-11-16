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
            this.users = new User[9];
            this.users[0] = new User("Juan SysAdmin", "sysadmin", "12345", "SADMIN", new int[] { 0, 1, 2, 3 }, 0);
            this.users[1] = new User("John Admin", "admin", "12345", "ADMIN", new int[] { 3, 4, 5 }, 1);
            this.users[2] = new User("Felipe Reviewer", "reviewer", "12345", "REVIEWER", new int[] { 6, 7, 8 }, 2);
            this.users[3] = new User("Maria Reviewer", "maria", "12345", "REVIEWER", new int[] { 6, 7, 8 }, 3);
            this.users[4] = new User("Gerardo Reviewer", "gerardo", "12345", "REVIEWER", new int[] { 6, 7, 8 }, 4);
            this.users[5] = new User("John Reviewer", "john", "12345", "REVIEWER", new int[] { 6, 7, 8 }, 5);
            this.users[6] = new User("Alexander Reviewer", "alexander", "12345", "REVIEWER", new int[] { 6, 7, 8 }, 6);
            this.users[7] = new User("Carlos Reviewer", "carlos", "12345", "REVIEWER", new int[] { 6, 7, 8 }, 7);
            this.users[8] = new User("Sergio Reviewer", "sergio", "12345", "REVIEWER", new int[] { 6, 7, 8 }, 8);
        }

        internal User[] getUsersByOffice(int officeId)
        {
            List<User> usersFromOffice = new List<User>();

            foreach (User tempUser in users)
            {
                Boolean added = false;
                foreach (int tempOfficeId in tempUser.IdOffices)
                {
                    if (tempOfficeId == officeId && !added)
                    {
                        usersFromOffice.Add(tempUser);
                        added = true;
                    }
                }
            }

            return usersFromOffice.ToArray();
        }
    }
}