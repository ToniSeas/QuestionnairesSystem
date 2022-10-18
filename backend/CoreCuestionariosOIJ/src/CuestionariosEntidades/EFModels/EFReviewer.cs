using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosEntidades.EFModels
{
    public class EFReviewer : EFUser
    {
        public int? IdQuestionnaire { get; set; }
    }
}
