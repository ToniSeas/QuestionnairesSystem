using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    class Question
    {
        public int Id { get; set; }
        public string Statement { get; set; } = string.Empty;
        public string Label { get; set; } = string.Empty;
        public int Position { get; set; }
        public QuestionType Type { get; set; }
        public SubCategory SubCategory { get; set; }
        public Category Category { get; set; }

    }
}
