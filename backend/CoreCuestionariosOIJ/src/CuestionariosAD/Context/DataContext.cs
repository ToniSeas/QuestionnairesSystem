using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosAD.Context
{
    public class DataContext : DbContext
    {

        public DataContext() { }

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { 
            
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=localhost;Database=AnalisisCuestionariosProyecto2022;Trusted_Connection=True;");
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
            foreach (var relationship in modelBuilder.Model.GetEntityTypes()
                .SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.ClientSetNull;
            }

            base.OnModelCreating(modelBuilder);

        }

    }
}
