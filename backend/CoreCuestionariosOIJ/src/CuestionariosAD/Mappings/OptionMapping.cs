using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CuestionariosEntidades.Models;
using CuestionariosEntidades.EFModels;

namespace CuestionariosAD.Mappings
{
    public class OptionMapping : IEntityTypeConfiguration<EFOption>
    {
        public void Configure(EntityTypeBuilder<EFOption> builder)
        {
            // Indicarle las columnas de la base de datos
            builder.HasKey(c => c.Id);

            builder.Property(c => c.OptionName)
                .IsRequired()
                .HasColumnType("nvarchar(180)")
            .HasColumnName("opcion");

            builder.ToTable("tb_opcion");
        }
    }
}
