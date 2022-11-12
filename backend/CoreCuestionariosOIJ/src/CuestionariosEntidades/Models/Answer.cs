using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class Answer
    {
        public int? Id { get; set; }
        public DateTime? Date { get; set; }
        public int? QuestionId { get; set; }
        public string? AnswerText { get; set; } = string.Empty;
        public bool? IsDeleted { get; set; }

        // EF Relation
        public IEnumerable<AnswerOption>? AnswerOptions { get; set; }
        public Question? Question { get; set; }

    }
}
