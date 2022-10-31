using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class QuestionType
    {
        public int? Id { get; set; }
        public string Name { get; set; } = string.Empty;

        // EF Relation
        public IEnumerable<Question>? Questions { get; set; }
        public IEnumerable<Option>? Options { get; set; }
    }
}
