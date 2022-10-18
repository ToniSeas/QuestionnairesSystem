using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.EFModels
{
    public class EFQuestion
    {
        public int? Id { get; set; }
        public string? Statement { get; set; } = string.Empty;
        public string? Label { get; set; } = string.Empty;
        public int? Position { get; set; }
        public EFQuestionType? Type { get; set; }
        public EFSubCategory? SubCategory { get; set; }
        public EFCategory? Category { get; set; }

    }
}
