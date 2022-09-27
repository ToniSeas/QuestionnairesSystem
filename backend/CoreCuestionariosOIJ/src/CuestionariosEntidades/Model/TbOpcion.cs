using System;
using System.Collections.Generic;

namespace CuestionariosEntidades.Model
{
    public partial class TbOpcion
    {
        public int Id { get; set; }
        public string Opcion { get; set; } = null!;
        public int? IdPregunta { get; set; }
        public int IdTipoPregunta { get; set; }
        public bool Estatica { get; set; }

        public virtual TbPreguntum? IdPreguntaNavigation { get; set; }
        public virtual TbTipoPreguntum IdTipoPreguntaNavigation { get; set; } = null!;
    }
}
