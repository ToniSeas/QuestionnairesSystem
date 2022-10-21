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
        public string? Statement { get; set; } = string.Empty;
        public string? Label { get; set; } = string.Empty;
        public int? Position { get; set; }
        public int? CategoryId { get; set; }
        public int? SubCategoryId { get; set; }
        public int? QuestionnaireId { get; set; }
        public int? TypeId { get; set; }
        public bool? IsOptional { get; set; }

        // EF Relation
        public IEnumerable<Answer>? Answers { get; set; }
        public Questionnaire? Questionnaire;
        public Category? Category;
        public SubCategory? SubCategory;
        public QuestionType? QuestionType;
        public IEnumerable<Option>? Options { get; set; }

    }
}
