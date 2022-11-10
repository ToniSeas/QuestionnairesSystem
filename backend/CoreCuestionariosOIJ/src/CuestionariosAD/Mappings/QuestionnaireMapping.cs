using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CuestionariosEntidades.Models;

namespace CuestionariosAD.Mappings
{
    public class QuestionnaireMapping : IEntityTypeConfiguration<Questionnaire>
    {
        public void Configure(EntityTypeBuilder<Questionnaire> builder)
        {
            // Indicarle las columnas de la base de datos
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Name)
                .IsRequired()
                .HasColumnType("nvarchar(150)")
            .HasColumnName("nombre");

            builder.Property(c => c.IsActive)
                .IsRequired()
                .HasColumnType("bit")
            .HasColumnName("activo");

            builder.Property(c => c.CreationDate)
                .HasColumnType("date")
                .HasDefaultValueSql("getdate()")
            .HasColumnName("fechaCreacion");

            builder.Property(c => c.ExpirationDate)
                .IsRequired()
                .HasColumnType("date")
            .HasColumnName("vencimiento");

            builder.Property(c => c.IdQuestionnaireType)
                .IsRequired()
                .HasColumnType("int")
            .HasColumnName("idTipoCuestionario");

            builder.Property(c => c.Description)
                .IsRequired()
                .HasColumnType("nvarchar(500)")
            .HasColumnName("descripcion");

            builder.Property(c => c.IsDeleted)
                .IsRequired()
                .HasColumnType("bit")
                .HasDefaultValue(false)
                .HasColumnName("eliminado");

            // 1 : N => Cuestionaro : Preguntas
            builder.HasMany(c => c.Questions)
                .WithOne(b => b.Questionnaire)
                .HasForeignKey(b => b.QuestionnaireId);

            builder.ToTable("tb_cuestionario");
        }
    }
}
