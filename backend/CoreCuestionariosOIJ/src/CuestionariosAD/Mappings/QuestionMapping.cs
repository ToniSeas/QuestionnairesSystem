using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CuestionariosEntidades.Models;
using CuestionariosEntidades.EFModels;

namespace CuestionariosAD.Mappings
{
    public class QuestionMapping : IEntityTypeConfiguration<EFQuestion>
    {
        public void Configure(EntityTypeBuilder<EFQuestion> builder)
        {
            // Indicarle las columnas de la base de datos
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Statement)
                .IsRequired()
                .HasColumnType("nvarchar(180)")
            .HasColumnName("enunciado");

            builder.Property(c => c.Label)
                .IsRequired()
                .HasColumnType("nvarchar(180)")
            .HasColumnName("etiqueta");

            builder.Property(c => c.Position)
                .IsRequired()
                .HasColumnType("int")
            .HasColumnName("posicion");

            builder.ToTable("tb_pregunta");
        }
    }
}
