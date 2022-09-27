using System;
using System.Collections.Generic;

namespace CuestionariosEntidades.Model
{
    public partial class TbCuestionario
    {
        public TbCuestionario()
        {
            TbPregunta = new HashSet<TbPreguntum>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; } = null!;
        public bool? Activo { get; set; }
        public DateTime Vencimiento { get; set; }
        public string Decripcion { get; set; } = null!;
        public int IdTipoCuestionario { get; set; }
        public DateTime? FechaCreacion { get; set; }

        public virtual TbTipoCuestionario IdTipoCuestionarioNavigation { get; set; } = null!;
        public virtual ICollection<TbPreguntum> TbPregunta { get; set; }
    }
}
