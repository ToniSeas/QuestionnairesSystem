using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.EFModels
{
    public class EFSubCategory
    {
        public int? Id { get; set; }
        public String? Name { get; set; } = String.Empty;
        public int? IdCategory { get; set; }
        
    }
}
