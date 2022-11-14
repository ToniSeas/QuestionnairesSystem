using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class ReviewerQuestionnaire
    {
        public int? IdUser { get; set; }
        public int? IdQuestionnaire { get; set; }
        public bool? IsDeleted { get; set; }

        // EF Relation
        public Questionnaire? Questionnaire { get; set; }
    }
}
