using CuestionariosEntidades.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace CuestionariosEntidades.EFModels
{
    public class EFCategory
    {
        public int? Id { get; set; }
        public string? Name { get; set; } = string.Empty;

        // EF Relation
        public IEnumerable<EFSubCategory>? SubCategories { get; set; }

    }
}
