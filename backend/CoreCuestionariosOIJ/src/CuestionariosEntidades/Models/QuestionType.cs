using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class QuestionType
    {
        public string? Id { get; set; } = string.Empty;
        public string? Name { get; set; } = string.Empty;
        public bool? IsDeleted { get; set; }


        // EF Relation
        public IEnumerable<Question>? Questions { get; set; }
        public IEnumerable<Option>? Options { get; set; }
    }
}
