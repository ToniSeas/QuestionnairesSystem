using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class Office
    {
        public String? Name { get; set; } = String.Empty;
        public int? Id { get; set; }
        public bool? IsDeleted { get; set; }

        // EF Relation
        public IEnumerable<User>? Users { get; set; }
    }
}
