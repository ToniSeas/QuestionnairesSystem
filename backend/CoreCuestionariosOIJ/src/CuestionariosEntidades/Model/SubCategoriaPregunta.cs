using System;
using System.Collections.Generic;

namespace CuestionariosEntidades.Model
{
    public partial class SubCategoriaPregunta
    {
        public SubCategoriaPregunta()
        {
            TbPregunta = new HashSet<TbPreguntum>();
        }

        public int Id { get; set; }
        public string? Nombre { get; set; }
        public int IdCategoria { get; set; }

        public virtual TbCategoriaPreguntum IdCategoriaNavigation { get; set; } = null!;
        public virtual ICollection<TbPreguntum> TbPregunta { get; set; }
    }
}
