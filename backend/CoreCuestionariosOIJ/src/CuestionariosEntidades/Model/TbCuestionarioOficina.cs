using System;
using System.Collections.Generic;

namespace CuestionariosEntidades.Model
{
    public partial class TbCuestionarioOficina
    {
        public int IdCuestionario { get; set; }
        public int IdOficina { get; set; }
        public bool Eliminado { get; set; }

        public virtual TbCuestionario IdCuestionarioNavigation { get; set; } = null!;
        public virtual Oficina IdOficinaNavigation { get; set; } = null!;
    }
}
