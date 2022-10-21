using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class Questionnaire
    {
        public int Id { get; set; }
        public string? Name { get; set; } = string.Empty;
        public bool? IsActive { get; set; }
        public string? Description { get; set; } = string.Empty;
        public int? IdQuestionnaireType { get; set; }
        public DateTime? CreationDate { get; set; }
        public DateTime? ExpirationDate { get; set; }

        // EF Relation
        public IEnumerable<Question>? Questions { get; set; }
        public QuestionnaireType? QuestionnaireType { get; set; }
    }
}
