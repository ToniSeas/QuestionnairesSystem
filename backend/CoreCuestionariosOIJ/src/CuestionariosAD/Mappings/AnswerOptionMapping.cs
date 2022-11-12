using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CuestionariosEntidades.Models;
using System.Reflection.Emit;
using System;

namespace CuestionariosAD.Mappings
{
    public class AnswerOptionMapping : IEntityTypeConfiguration<AnswerOption>
    {
        public void Configure(EntityTypeBuilder<AnswerOption> builder)
        {
            // Indicarle las columnas de la base de datos
            builder.HasKey(ao => new { ao.IdAnswer, ao.IdOption });

            builder.Property(c => c.IdAnswer)
                .IsRequired()
                .HasColumnType("int")
                .HasColumnName("idRespuesta");

            builder.Property(c => c.IdOption)
                .IsRequired()
                .HasColumnType("int")
            .HasColumnName("idOpcion");

            builder.Property(c => c.IsDeleted)
                .IsRequired()
                .HasColumnType("bit")
                .HasDefaultValue(false)
                .HasColumnName("eliminado");

            // EF Relation: Opciones : Respuestas
            // Relacion indirecta de EF
            builder.HasOne(ao => ao.Answer)
            .WithMany(a => a.AnswerOptions)
            .HasForeignKey(ao => ao.IdAnswer);

            builder.HasOne(ao => ao.Option)
                .WithMany(o => o.AnswerOptions)
                .HasForeignKey(ao => ao.IdOption);

            builder.ToTable("tb_respuesta_opcion");
        }
    }
}
