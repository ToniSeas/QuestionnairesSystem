using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class Questionnaire
    {
        public IEnumerable<Question>? Questions { get; set; }
        public String? Type { get; set; } = String.Empty;
        public String? Name { get; set; } = String.Empty;
        public DateTime? Date { get; set; }
        public String? Description { get; set; } = String.Empty;
    }
}
