using System;
using System.Collections.Generic;

namespace CuestionariosEntidades.Model
{
    public partial class TbCategoriaPreguntum
    {
        public TbCategoriaPreguntum()
        {
            TbPregunta = new HashSet<TbPreguntum>();
            TbSubcategoriaPregunta = new HashSet<SubCategoriaPregunta>();
        }

        public int Id { get; set; }
        public string? Nombre { get; set; }

        public virtual ICollection<TbPreguntum> TbPregunta { get; set; }
        public virtual ICollection<SubCategoriaPregunta> TbSubcategoriaPregunta { get; set; }
    }
}
