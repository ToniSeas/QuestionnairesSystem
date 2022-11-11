using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CuestionariosEntidades.Models;

namespace CuestionariosAD.Mappings
{
    public class AnswerMapping : IEntityTypeConfiguration<Answer>
    {
        public void Configure(EntityTypeBuilder<Answer> builder)
        {
            // Indicarle las columnas de la base de datos
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Date)
                .IsRequired()
                .HasColumnType("datetime")
                .HasDefaultValueSql("getdate()")
            .HasColumnName("fecha");

            builder.Property(c => c.QuestionId)
                .IsRequired()
                .HasColumnType("int")
            .HasColumnName("idPregunta");

            builder.Property(c => c.AnswerText)
                .IsRequired()
                .HasColumnType("varchar(500)")
            .HasColumnName("respuesta");

            builder.Property(c => c.IsDeleted)
                .IsRequired()
                .HasColumnType("bit")
                .HasDefaultValue(false)
                .HasColumnName("eliminado");

            // N : N => Opciones : Respuestas
            builder.HasMany(c => c.Options)
                .WithMany(b => b.Answers)
                .UsingEntity(j => j.ToTable("tb_respuesta_opcion"));
            
            builder.ToTable("tb_respuesta");
        }
    }
}
