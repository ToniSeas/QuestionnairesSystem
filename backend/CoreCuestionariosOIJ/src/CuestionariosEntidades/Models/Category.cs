using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class Category
    {
        public int Id { get; set; }
        public int Name { get; set; } = string.Empty;
        public IEnumerable<SubCategory> SubCategories { get; set; }

    }
}
