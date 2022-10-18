using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CuestionariosEntidades.Models;
using CuestionariosEntidades.EFModels;

namespace CuestionariosAD.Mappings
{
    public class SubCategoryMapping : IEntityTypeConfiguration<EFSubCategory>
    {
        public void Configure(EntityTypeBuilder<EFSubCategory> builder)
        {
            // Indicarle las columnas de la base de datos
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Name)
                .IsRequired()
                .HasColumnType("nvarchar(150)")
            .HasColumnName("nombre");

            builder.ToTable("tb_subcategoria_pregunta");
        }
    }
}
