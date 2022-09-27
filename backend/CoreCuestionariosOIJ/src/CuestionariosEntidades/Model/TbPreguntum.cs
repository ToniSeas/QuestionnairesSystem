using System;
using System.Collections.Generic;

namespace CuestionariosEntidades.Model
{
    public partial class TbPreguntum
    {
        public TbPreguntum()
        {
            TbOpcions = new HashSet<TbOpcion>();
            TbRespuesta = new HashSet<TbRespuestum>();
        }

        public int Id { get; set; }
        public string Pregunta { get; set; } = null!;
        public string Etiqueta { get; set; } = null!;
        public int Posicion { get; set; }
        public int IdCategoria { get; set; }
        public int IdSubcategoria { get; set; }
        public int IdCuestionario { get; set; }
        public int IdTipo { get; set; }

        public virtual TbCategoriaPreguntum IdCategoriaNavigation { get; set; } = null!;
        public virtual TbCuestionario IdCuestionarioNavigation { get; set; } = null!;
        public virtual SubCategoriaPregunta IdSubcategoriaNavigation { get; set; } = null!;
        public virtual TbTipoPreguntum IdTipoNavigation { get; set; } = null!;
        public virtual ICollection<TbOpcion> TbOpcions { get; set; }
        public virtual ICollection<TbRespuestum> TbRespuesta { get; set; }
    }
}
