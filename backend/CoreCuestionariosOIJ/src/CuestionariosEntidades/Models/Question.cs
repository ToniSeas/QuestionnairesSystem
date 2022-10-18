using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class Question
    {
        public int? Id { get; set; }
        public String? Statement { get; set; } = String.Empty;
        public String? Label { get; set; } = String.Empty;
        public int? Position { get; set; }
        public QuestionType? Type { get; set; }
        public SubCategory? SubCategory { get; set; }
        public Category? Category { get; set; }

    }
}
