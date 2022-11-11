using SecurityAPI.Models;

namespace SecurityAPI.DataAccess
{
    public class OfficeDataAccess
    {
        public OfficeDataAccess()
        {
            this.offices = new Office[3];
            offices[0] = new Office(1, "Oficina de pruebas 1");
            offices[1] = new Office(2, "Oficina de pruebas 2");
            offices[2] = new Office(3, "Oficina de pruebas 3");
        }

        public Office[] offices { get; set; }
    }
}
