using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CuestionariosEntidades.Model
{
    public partial class cuestionariosContext : DbContext
    {
        public cuestionariosContext()
        {
        }

        public cuestionariosContext(DbContextOptions<cuestionariosContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Oficina> Oficinas { get; set; } = null!;
        public virtual DbSet<TbCategoriaPreguntum> TbCategoriaPregunta { get; set; } = null!;
        public virtual DbSet<TbCuestionario> TbCuestionarios { get; set; } = null!;
        public virtual DbSet<TbCuestionarioOficina> TbCuestionarioOficinas { get; set; } = null!;
        public virtual DbSet<TbCuestionarioUsuario> TbCuestionarioUsuarios { get; set; } = null!;
        public virtual DbSet<TbOpcion> TbOpcions { get; set; } = null!;
        public virtual DbSet<TbPreguntum> TbPregunta { get; set; } = null!;
        public virtual DbSet<TbRespuestaOpcion> TbRespuestaOpcions { get; set; } = null!;
        public virtual DbSet<TbRespuestum> TbRespuesta { get; set; } = null!;
        public virtual DbSet<TbRevisaCuestionario> TbRevisaCuestionarios { get; set; } = null!;
        public virtual DbSet<SubCategoriaPregunta> TbSubcategoriaPregunta { get; set; } = null!;
        public virtual DbSet<TbTipoCuestionario> TbTipoCuestionarios { get; set; } = null!;
        public virtual DbSet<TbTipoPreguntum> TbTipoPregunta { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\;Database=cuestionarios;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Oficina>(entity =>
            {
                entity.ToTable("oficinas");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CodigoOficina)
                    .HasMaxLength(4)
                    .IsUnicode(false)
                    .HasColumnName("codigoOficina")
                    .IsFixedLength();

                entity.Property(e => e.Eliminado)
                    .HasColumnName("eliminado")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Estado)
                    .HasColumnName("estado")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Institucion).HasColumnName("institucion");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(255)
                    .HasColumnName("nombre");

                entity.Property(e => e.Usuario)
                    .HasMaxLength(50)
                    .HasColumnName("usuario");
            });

            modelBuilder.Entity<TbCategoriaPreguntum>(entity =>
            {
                entity.ToTable("tb_categoria_pregunta");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .HasColumnName("nombre");
            });

            modelBuilder.Entity<TbCuestionario>(entity =>
            {
                entity.ToTable("tb_cuestionario");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Activo)
                    .IsRequired()
                    .HasColumnName("activo")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Decripcion)
                    .HasMaxLength(200)
                    .HasColumnName("decripcion");

                entity.Property(e => e.FechaCreacion)
                    .HasColumnType("date")
                    .HasColumnName("fechaCreacion")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IdTipoCuestionario).HasColumnName("idTipoCuestionario");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .HasColumnName("nombre");

                entity.Property(e => e.Vencimiento)
                    .HasColumnType("date")
                    .HasColumnName("vencimiento");

                entity.HasOne(d => d.IdTipoCuestionarioNavigation)
                    .WithMany(p => p.TbCuestionarios)
                    .HasForeignKey(d => d.IdTipoCuestionario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_cuesti__idTip__32E0915F");
            });

            modelBuilder.Entity<TbCuestionarioOficina>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("tb_cuestionario_oficina");

                entity.Property(e => e.Eliminado).HasColumnName("eliminado");

                entity.Property(e => e.IdCuestionario).HasColumnName("idCuestionario");

                entity.Property(e => e.IdOficina).HasColumnName("idOficina");

                entity.HasOne(d => d.IdCuestionarioNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdCuestionario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_cuesti__idCue__3D5E1FD2");

                entity.HasOne(d => d.IdOficinaNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdOficina)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_cuesti__idOfi__3E52440B");
            });

            modelBuilder.Entity<TbCuestionarioUsuario>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("tb_cuestionario_usuario");

                entity.Property(e => e.Eliminado).HasColumnName("eliminado");

                entity.Property(e => e.IdCuestionario).HasColumnName("idCuestionario");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.HasOne(d => d.IdCuestionarioNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdCuestionario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_cuesti__idCue__398D8EEE");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_cuesti__idUsu__3A81B327");
            });

            modelBuilder.Entity<TbOpcion>(entity =>
            {
                entity.ToTable("tb_opcion");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Estatica).HasColumnName("estatica");

                entity.Property(e => e.IdPregunta).HasColumnName("idPregunta");

                entity.Property(e => e.IdTipoPregunta).HasColumnName("idTipoPregunta");

                entity.Property(e => e.Opcion)
                    .HasMaxLength(200)
                    .HasColumnName("opcion");

                entity.HasOne(d => d.IdPreguntaNavigation)
                    .WithMany(p => p.TbOpcions)
                    .HasForeignKey(d => d.IdPregunta)
                    .HasConstraintName("FK__tb_opcion__idPre__4E88ABD4");

                entity.HasOne(d => d.IdTipoPreguntaNavigation)
                    .WithMany(p => p.TbOpcions)
                    .HasForeignKey(d => d.IdTipoPregunta)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_opcion__idTip__4F7CD00D");
            });

            modelBuilder.Entity<TbPreguntum>(entity =>
            {
                entity.ToTable("tb_pregunta");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Etiqueta)
                    .HasMaxLength(100)
                    .HasColumnName("etiqueta");

                entity.Property(e => e.IdCategoria).HasColumnName("idCategoria");

                entity.Property(e => e.IdCuestionario).HasColumnName("idCuestionario");

                entity.Property(e => e.IdSubcategoria).HasColumnName("idSubcategoria");

                entity.Property(e => e.IdTipo).HasColumnName("idTipo");

                entity.Property(e => e.Posicion).HasColumnName("posicion");

                entity.Property(e => e.Pregunta)
                    .HasMaxLength(200)
                    .HasColumnName("pregunta");

                entity.HasOne(d => d.IdCategoriaNavigation)
                    .WithMany(p => p.TbPregunta)
                    .HasForeignKey(d => d.IdCategoria)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_pregun__idCat__47DBAE45");

                entity.HasOne(d => d.IdCuestionarioNavigation)
                    .WithMany(p => p.TbPregunta)
                    .HasForeignKey(d => d.IdCuestionario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_pregun__idCue__49C3F6B7");

                entity.HasOne(d => d.IdSubcategoriaNavigation)
                    .WithMany(p => p.TbPregunta)
                    .HasForeignKey(d => d.IdSubcategoria)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_pregun__idSub__48CFD27E");

                entity.HasOne(d => d.IdTipoNavigation)
                    .WithMany(p => p.TbPregunta)
                    .HasForeignKey(d => d.IdTipo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_pregun__idTip__4AB81AF0");
            });

            modelBuilder.Entity<TbRespuestaOpcion>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("tb_respuesta_opcion");

                entity.Property(e => e.IdOpcion).HasColumnName("idOpcion");

                entity.Property(e => e.IdRespuesta).HasColumnName("idRespuesta");

                entity.HasOne(d => d.IdOpcionNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdOpcion)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_respue__idOpc__5535A963");

                entity.HasOne(d => d.IdRespuestaNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdRespuesta)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_respue__idRes__5629CD9C");
            });

            modelBuilder.Entity<TbRespuestum>(entity =>
            {
                entity.ToTable("tb_respuesta");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Fecha)
                    .HasColumnType("datetime")
                    .HasColumnName("fecha")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IdPregunta).HasColumnName("idPregunta");

                entity.Property(e => e.Respuesta)
                    .HasMaxLength(200)
                    .HasColumnName("respuesta");

                entity.HasOne(d => d.IdPreguntaNavigation)
                    .WithMany(p => p.TbRespuesta)
                    .HasForeignKey(d => d.IdPregunta)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_respue__idPre__534D60F1");
            });

            modelBuilder.Entity<TbRevisaCuestionario>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("tb_revisa_Cuestionario");

                entity.Property(e => e.Eliminado).HasColumnName("eliminado");

                entity.Property(e => e.IdCuestionario).HasColumnName("idCuestionario");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.HasOne(d => d.IdCuestionarioNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdCuestionario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_revisa__idCue__36B12243");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_revisa__idUsu__35BCFE0A");
            });

            modelBuilder.Entity<SubCategoriaPregunta>(entity =>
            {
                entity.ToTable("tb_subcategoria_pregunta");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.IdCategoria).HasColumnName("idCategoria");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .HasColumnName("nombre");

                entity.HasOne(d => d.IdCategoriaNavigation)
                    .WithMany(p => p.TbSubcategoriaPregunta)
                    .HasForeignKey(d => d.IdCategoria)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__tb_subcat__idCat__44FF419A");
            });

            modelBuilder.Entity<TbTipoCuestionario>(entity =>
            {
                entity.ToTable("tb_tipo_Cuestionario");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("nombre");
            });

            modelBuilder.Entity<TbTipoPreguntum>(entity =>
            {
                entity.ToTable("tb_tipo_pregunta");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .HasColumnName("nombre");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.ToTable("usuarios");

                entity.HasIndex(e => e.Usuario1, "UQ__usuarios__9AFF8FC635A70307")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Activo)
                    .IsRequired()
                    .HasColumnName("activo")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.CantidadIntentosAcceso).HasColumnName("cantidadIntentosAcceso");

                entity.Property(e => e.Correo)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("correo");

                entity.Property(e => e.Eliminado)
                    .HasColumnName("eliminado")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Identificacion)
                    .HasMaxLength(25)
                    .IsUnicode(false)
                    .HasColumnName("identificacion");

                entity.Property(e => e.InstitucionId).HasColumnName("institucionId");

                entity.Property(e => e.NombreUsuario)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombreUsuario");

                entity.Property(e => e.Observaciones)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("observaciones");

                entity.Property(e => e.OficinaId).HasColumnName("oficinaId");

                entity.Property(e => e.PrimerApellido)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("primerApellido");

                entity.Property(e => e.TipoAutenticacionId).HasColumnName("tipoAutenticacionId");

                entity.Property(e => e.TipoIdentificacionId).HasColumnName("tipoIdentificacionId");

                entity.Property(e => e.TipoUsuario)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .HasColumnName("tipoUsuario")
                    .IsFixedLength();

                entity.Property(e => e.Usuario1)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("usuario");

                entity.Property(e => e.UsuarioActualiza)
                    .IsRowVersion()
                    .IsConcurrencyToken()
                    .HasColumnName("usuarioActualiza");

                entity.HasOne(d => d.Oficina)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.OficinaId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__usuarios__oficin__2C3393D0");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
