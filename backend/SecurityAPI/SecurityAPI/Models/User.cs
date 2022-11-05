namespace SecurityAPI.Models
{
    public class User
    {

        public User(String userName, String password, string role)
        {
            this.userName = userName;
            this.password = password;
            this.role = role;
        }
        public String userName { get; set; }

        public String password { get; set; }

        public String role { get; set; }
    }

}
