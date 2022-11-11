using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class Option
    {
        public int? Id { get; set; }
        public string? OptionName { get; set; } = string.Empty;
        public int? IdQuestion { get; set; }
        public string? IdQuestionType { get; set; } = string.Empty;
        public bool? IsDeleted { get; set; }

        // EF Relation
        public IEnumerable<Answer>? Answers { get; set; }
        public Question? Question { get; set; }
        public QuestionType? QuestionType { get; set; }
    }
}
