using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class AnswerOption
    {
        public int? IdAnswer { get; set; }
        public int? IdOption { get; set; }
        public bool? IsDeleted { get; set; }

        // EF Relation
        public Option? Option { get; set; }
        public Answer? Answer { get; set; }
    }
}
