using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CuestionariosEntidades.Models;

namespace CuestionariosAD.Mappings
{
    public class OptionMapping : IEntityTypeConfiguration<Option>
    {
        public void Configure(EntityTypeBuilder<Option> builder)
        {
            // Indicarle las columnas de la base de datos
            builder.HasKey(c => c.Id);

            builder.Property(c => c.OptionName)
                .IsRequired()
                .HasColumnType("nvarchar(180)")
            .HasColumnName("opcion");

            // N : N => Opciones : Respuestas
            builder.HasMany(c => c.Answers)
                .WithMany(b => b.Options)
                .UsingEntity(j => j.ToTable("tb_respuesta_opcion"));

            builder.ToTable("tb_opcion");
        }
    }
}
