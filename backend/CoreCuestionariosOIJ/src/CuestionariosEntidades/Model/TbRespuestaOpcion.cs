using System;
using System.Collections.Generic;

namespace CuestionariosEntidades.Model
{
    public partial class TbRespuestaOpcion
    {
        public int IdRespuesta { get; set; }
        public int IdOpcion { get; set; }

        public virtual TbOpcion IdOpcionNavigation { get; set; } = null!;
        public virtual TbRespuestum IdRespuestaNavigation { get; set; } = null!;
    }
}
