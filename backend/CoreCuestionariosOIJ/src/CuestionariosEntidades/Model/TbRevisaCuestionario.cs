using System;
using System.Collections.Generic;

namespace CuestionariosEntidades.Model
{
    public partial class TbRevisaCuestionario
    {
        public int IdUsuario { get; set; }
        public int IdCuestionario { get; set; }
        public bool Eliminado { get; set; }

        public virtual TbCuestionario IdCuestionarioNavigation { get; set; } = null!;
        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
    }
}
