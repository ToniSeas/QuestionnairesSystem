using System;
using System.Collections.Generic;

namespace CuestionariosEntidades.Model
{
    public partial class Usuario
    {
        public int Id { get; set; }
        public string Usuario1 { get; set; } = null!;
        public string Identificacion { get; set; } = null!;
        public string? NombreUsuario { get; set; }
        public string? PrimerApellido { get; set; }
        public int TipoAutenticacionId { get; set; }
        public string? TipoUsuario { get; set; }
        public string? Correo { get; set; }
        public int? CantidadIntentosAcceso { get; set; }
        public byte[] UsuarioActualiza { get; set; } = null!;
        public string? Observaciones { get; set; }
        public bool? Eliminado { get; set; }
        public int? TipoIdentificacionId { get; set; }
        public int? InstitucionId { get; set; }
        public int OficinaId { get; set; }
        public bool? Activo { get; set; }

        public virtual Oficina Oficina { get; set; } = null!;
    }
}
