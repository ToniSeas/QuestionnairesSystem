using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CuestionariosEntidades.Models;

namespace CuestionariosAD.Mappings
{
    public class QuestionTypeMapping : IEntityTypeConfiguration<QuestionType>
    {
        public void Configure(EntityTypeBuilder<QuestionType> builder)
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

            // 1 : N => TipoPregunta : Preguntas
            builder.HasMany(c => c.Questions)
                .WithOne(b => b.QuestionType)
                .HasForeignKey(b => b.TypeId);

            // 1 : N => TipoPregunta : Opciones
            builder.HasMany(c => c.Options)
                .WithOne(b => b.QuestionType)
                .HasForeignKey(b => b.IdQuestionType);

            builder.ToTable("tb_tipo_pregunta");
        }
    }
}
