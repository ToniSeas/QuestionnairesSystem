using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CuestionariosEntidades.Models;

namespace CuestionariosAD.Mappings
{
    public class SubCategoryMapping : IEntityTypeConfiguration<SubCategory>
    {
        public void Configure(EntityTypeBuilder<SubCategory> builder)
        {
            // Indicarle las columnas de la base de datos
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Name)
                .IsRequired()
                .HasColumnType("nvarchar(150)")
            .HasColumnName("nombre");

            builder.Property(c => c.IdCategory)
                .IsRequired()
                .HasColumnType("int")
            .HasColumnName("idCategoria");

            builder.Property(c => c.IsDeleted)
                .IsRequired()
                .HasColumnType("bit")
                .HasDefaultValue(false)
                .HasColumnName("eliminado");

            // 1 : N => SubCategoria : Preguntas
            builder.HasMany(c => c.Questions)
                .WithOne(b => b.SubCategory)
                .HasForeignKey(b => b.SubCategoryId);

            builder.ToTable("tb_subcategoria_pregunta");
        }
    }
}
