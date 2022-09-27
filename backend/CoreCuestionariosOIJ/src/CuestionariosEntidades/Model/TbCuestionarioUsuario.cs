using System;
using System.Collections.Generic;

namespace CuestionariosEntidades.Model
{
    public partial class TbCuestionarioUsuario
    {
        public int IdCuestionario { get; set; }
        public int IdUsuario { get; set; }
        public bool Eliminado { get; set; }

        public virtual TbCuestionario IdCuestionarioNavigation { get; set; } = null!;
        public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
    }
}
