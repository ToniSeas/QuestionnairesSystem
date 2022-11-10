using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class QuestionnaireType
    {
        public int? Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public bool? IsDeleted { get; set; }


        // EF Relation
        public IEnumerable<Questionnaire>? Questionnaires { get; set; }
    }
}
