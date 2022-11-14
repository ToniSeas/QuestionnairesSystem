using CuestionariosEntidades.Models;
using Microsoft.EntityFrameworkCore;

namespace CuestionariosAD.Context
{
    public class DataContext : DbContext
    {

        public DataContext() { }
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<AnswerOption> AnswerOptions => Set<AnswerOption>();
        public DbSet<ReviewerQuestionnaire> ReviewerQuestionnaires => Set<ReviewerQuestionnaire>();
        public DbSet<Category> Categories => Set<Category>();
        public DbSet<SubCategory> SubCategories => Set<SubCategory>();
        public DbSet<Question> Questions => Set<Question>();
        public DbSet<Option> Options => Set<Option>();
        public DbSet<QuestionType> QuestionTypes => Set<QuestionType>();
        public DbSet<Questionnaire> Questionnaires => Set<Questionnaire>();
        public DbSet<QuestionnaireType> QuestionnaireTypes => Set<QuestionnaireType>();
        public DbSet<Answer> Answers => Set<Answer>();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { 
            
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=163.178.107.10;Initial Catalog=cuestionarios;Persist Security Info=True;User ID=laboratorios;Password=TUy&)&nfC7QqQau.%278UQ24/=%;");
                
            }

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {

            /* Este linea de código se encarga de registrar cada clase de mapeo que hayamos creado */
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(DataContext).Assembly);

            /* El siguiente foreach es para desactivar la eliminación en cascada. 
             * Por defecto, si se elimina un objetivo que tiene una llave foranea en otra
             * tabla, se eliminará también.
             * Entonces es buena opción desactivarlo para que el desarrollador realice las validaciones
             * a mano y así no borrar registros equivocados */
            /*foreach (var relationship in modelBuilder.Model.GetEntityTypes()
                .SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.ClientSetNull;
            }*/

            base.OnModelCreating(modelBuilder);

        }

    }
}
