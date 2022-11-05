using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class Category
    {
        public int? Id { get; set; }
        public string? Name { get; set; } = string.Empty;

        // EF Relation
        public IEnumerable<SubCategory>? SubCategories { get; set; }
        // EF Relation
        public IEnumerable<Question>? Questions { get; set; }

    }
}
