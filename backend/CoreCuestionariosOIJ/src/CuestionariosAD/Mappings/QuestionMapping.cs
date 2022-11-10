using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CuestionariosEntidades.Models;

namespace CuestionariosAD.Mappings
{
    public class QuestionMapping : IEntityTypeConfiguration<Question>
    {
        public void Configure(EntityTypeBuilder<Question> builder)
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

            builder.Property(c => c.CategoryId)
                .IsRequired()
                .HasColumnType("int")
            .HasColumnName("idCategoria");

            builder.Property(c => c.SubCategoryId)
                .IsRequired()
                .HasColumnType("int")
            .HasColumnName("idSubcategoria");

            builder.Property(c => c.QuestionnaireId)
                .IsRequired()
                .HasColumnType("int")
            .HasColumnName("idCuestionario");

            builder.Property(c => c.TypeId)
                .IsRequired()
                .HasColumnType("varchar(2)")
            .HasColumnName("idTipo");

            builder.Property(c => c.IsOptional)
                .IsRequired()
                .HasColumnType("bit")
                .HasDefaultValue()
            .HasColumnName("opcional");

            builder.Property(c => c.IsDeleted)
                .IsRequired()
                .HasColumnType("bit")
                .HasDefaultValue(false)
                .HasColumnName("eliminado");

            // 1 : N => Pregunta : Answers
            builder.HasMany(c => c.Answers)
                .WithOne(b => b.Question)
                .HasForeignKey(b => b.QuestionId);

            // 1 : N => Pregunta : Opciones
            builder.HasMany(c => c.Options)
                .WithOne(b => b.Question)
                .HasForeignKey(b => b.IdQuestion);

            builder.ToTable("tb_pregunta");
        }
    }
}
