using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    class SubCategory
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int IdCategory { get; set; }

    }
}
