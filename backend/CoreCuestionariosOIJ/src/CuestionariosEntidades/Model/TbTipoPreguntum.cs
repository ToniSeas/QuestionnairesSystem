using System;
using System.Collections.Generic;

namespace CuestionariosEntidades.Model
{
    public partial class TbTipoPreguntum
    {
        public TbTipoPreguntum()
        {
            TbOpcions = new HashSet<TbOpcion>();
            TbPregunta = new HashSet<TbPreguntum>();
        }

        public int Id { get; set; }
        public string? Nombre { get; set; }

        public virtual ICollection<TbOpcion> TbOpcions { get; set; }
        public virtual ICollection<TbPreguntum> TbPregunta { get; set; }
    }
}
