using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CuestionariosEntidades.Models;

namespace CuestionariosAD.Mappings
{
    public class CategoryMapping : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            // Indicarle las columnas de la base de datos
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Name)
                .IsRequired()
                .HasColumnType("nvarchar(150)")
            .HasColumnName("nombre");

            // 1 : N => Categoria : SubCategorias
            builder.HasMany(c => c.SubCategories)
                .WithOne(b => b.Category)
                .HasForeignKey(b => b.IdCategory);

            // 1 : N => Categoria : Preguntas
            builder.HasMany(c => c.Questions)
                .WithOne(b => b.Category)
                .HasForeignKey(b => b.CategoryId);

            builder.Property(c => c.IsDeleted)
                .IsRequired()
                .HasColumnType("bit")
                .HasDefaultValue(false)
                .HasColumnName("eliminado");

            builder.ToTable("tb_categoria_pregunta");
        }
    }
}
