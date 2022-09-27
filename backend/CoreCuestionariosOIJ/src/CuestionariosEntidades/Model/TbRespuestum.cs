using System;
using System.Collections.Generic;

namespace CuestionariosEntidades.Model
{
    public partial class TbRespuestum
    {
        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public int IdPregunta { get; set; }
        public string? Respuesta { get; set; }

        public virtual TbPreguntum IdPreguntaNavigation { get; set; } = null!;
    }
}
