using System;
using System.Collections.Generic;

namespace CuestionariosEntidades.Model
{
    public partial class Oficina
    {
        public Oficina()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; } = null!;
        public bool? Eliminado { get; set; }
        public string? Usuario { get; set; }
        public string? CodigoOficina { get; set; }
        public bool? Estado { get; set; }
        public int? Institucion { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
