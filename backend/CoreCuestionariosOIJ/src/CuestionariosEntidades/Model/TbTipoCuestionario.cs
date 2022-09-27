using System;
using System.Collections.Generic;

namespace CuestionariosEntidades.Model
{
    public partial class TbTipoCuestionario
    {
        public TbTipoCuestionario()
        {
            TbCuestionarios = new HashSet<TbCuestionario>();
        }

        public int Id { get; set; }
        public string? Nombre { get; set; }

        public virtual ICollection<TbCuestionario> TbCuestionarios { get; set; }
    }
}
