using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CuestionariosEntidades.Models;
using CuestionariosEntidades.EFModels;

namespace CuestionariosAD.Mappings
{
    public class QuestionnaireMapping : IEntityTypeConfiguration<EFQuestionnaire>
    {
        public void Configure(EntityTypeBuilder<EFQuestionnaire> builder)
        {
            // Indicarle las columnas de la base de datos
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Name)
                .IsRequired()
                .HasColumnType("nvarchar(150)")
            .HasColumnName("nombre");

            builder.Property(c => c.ExpirationDate)
                .IsRequired()
                .HasColumnType("date")
            .HasColumnName("vencimiento");

            builder.Property(c => c.Description)
                .IsRequired()
                .HasColumnType("nvarchar(500)")
            .HasColumnName("descripcion");

            builder.ToTable("tb_cuestionario");
        }
    }
}
