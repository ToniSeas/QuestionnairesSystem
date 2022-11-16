using SecurityAPI.Models;

namespace SecurityAPI.DataAccess
{
    public class OfficeDataAccess
    {
        public OfficeDataAccess()
        {
            this.offices = new Office[8];
            offices[0] = new Office(0, "Recursos Humanos");
            offices[1] = new Office(1, "Administración General");
            offices[2] = new Office(2, "Archivos");
            offices[3] = new Office(3, "Expedientes");
            offices[4] = new Office(4, "Recepción");
            offices[5] = new Office(5, "Inventarios");
            offices[6] = new Office(6, "Sistemas de Información");
            offices[7] = new Office(7, "Atención al Cliente");
        }

        public Office[] offices { get; set; }

        public Office getOfficeById(int officeId)
        {
            foreach (Office tempOffice in this.offices)
            {
                if (tempOffice.id == officeId)
                {
                    return tempOffice;
                }
            }
            return null;
        }
    }
}
