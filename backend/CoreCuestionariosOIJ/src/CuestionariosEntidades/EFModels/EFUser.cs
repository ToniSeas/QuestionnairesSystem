using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.EFModels
{
    public class EFUser
    {
        public int? Id { get; set; }
        public String? Name { get; set; } = String.Empty;
        public String? Lastname { get; set; } = String.Empty;

    }
}
