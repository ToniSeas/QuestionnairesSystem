using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.Models
{
    public class Reviewer : User
    {
        public int? QuestionnaireId { get; set; }
        public int? UserId { get; set; }

    }
}
