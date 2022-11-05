namespace SecurityAPI.Models
{
    public class User
    {

        public User(String userName, String password, string role)
        {
            this.UserName = userName;
            this.Password = password;
            this.Role = role;
        }
        public String UserName { get; set; }

        public String Password { get; set; }

        public String Role { get; set; }
    }

}
