using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class Office
    {

        public Office(int id, String name)
        {
            this.id = id;
            this.name = name;
        }

        public int id { get; set; }

        public String name { get; set; }
    }
}
