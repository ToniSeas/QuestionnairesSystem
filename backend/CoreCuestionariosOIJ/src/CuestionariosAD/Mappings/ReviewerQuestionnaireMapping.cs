using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using CuestionariosEntidades.Models;
using System.Reflection.Emit;
using System;

namespace CuestionariosAD.Mappings
{
    public class ReviewerQuestionnaireMapping : IEntityTypeConfiguration<ReviewerQuestionnaire>
    {
        public void Configure(EntityTypeBuilder<ReviewerQuestionnaire> builder)
        {
            // Indicarle las columnas de la base de datos
            builder.HasKey(ao => new { ao.IdQuestionnaire, ao.IdUser });

            builder.Property(c => c.IdUser)
                .IsRequired()
                .HasColumnType("int")
            .HasColumnName("idUsuario");

            builder.Property(c => c.IdQuestionnaire)
                .IsRequired()
                .HasColumnType("int")
            .HasColumnName("idCuestionario");

            builder.Property(c => c.IsDeleted)
                .IsRequired()
                .HasColumnType("bit")
                .HasDefaultValue(false)
                .HasColumnName("eliminado");

            // 1 : N => Usuario : Cuestionarios
            builder.HasOne(c => c.Questionnaire)
                .WithMany(b => b.ReviewersQuestionnaire)
                .HasForeignKey(b => b.IdQuestionnaire);

            builder.ToTable("tb_revisa_Cuestionario");
        }
    }
}
