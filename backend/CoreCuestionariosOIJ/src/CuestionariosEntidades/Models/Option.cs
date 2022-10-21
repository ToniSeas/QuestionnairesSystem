using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class Option
    {
        public int Id { get; set; }
        public String OptionName { get; set; } = String.Empty;

        // EF Relation
        public IEnumerable<Answer>? Answers { get; set; }
    }
}
