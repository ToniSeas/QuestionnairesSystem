using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CuestionariosEntidades.Models;

namespace CuestionariosAD.Mappings
{
    public class QuestionnaireTypeMapping : IEntityTypeConfiguration<QuestionnaireType>
    {
        public void Configure(EntityTypeBuilder<QuestionnaireType> builder)
        {
            // Indicarle las columnas de la base de datos
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Name)
                .IsRequired()
                .HasColumnType("nvarchar(150)")
            .HasColumnName("nombre");

            builder.Property(c => c.IsDeleted)
                .IsRequired()
                .HasColumnType("bit")
                .HasDefaultValue(false)
                .HasColumnName("eliminado");

            // 1 : N => TipoCuestionario : Cuestinoario
            builder.HasMany(c => c.Questionnaires)
                .WithOne(b => b.QuestionnaireType)
                .HasForeignKey(b => b.IdQuestionnaireType);

            builder.ToTable("tb_tipo_Cuestionario");
        }
    }
}
