using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TFBancoDados.Models;

namespace TFBancoDados.Data
{
    public class TFBancoDadosContext : DbContext
    {
        public TFBancoDadosContext (DbContextOptions<TFBancoDadosContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Possui>().HasKey(p => new { p.fk_Periodo_Id_Periodo, p.fk_Curso_Id_Curso});
            modelBuilder.Entity<Possui>().HasOne(p => p.curso).WithMany(p => p.possui).HasForeignKey(p => p.fk_Curso_Id_Curso);
            modelBuilder.Entity<Possui>().HasOne(p => p.periodo).WithMany(p => p.possui).HasForeignKey(p => p.fk_Periodo_Id_Periodo);

            modelBuilder.Entity<Pertence>().HasKey(p => new { p.fk_Periodo_Id_Periodo, p.fk_Turma_Id_Turma });
            modelBuilder.Entity<Pertence>().HasOne(p => p.turma).WithMany(p => p.pertence).HasForeignKey(p => p.fk_Turma_Id_Turma);
            modelBuilder.Entity<Pertence>().HasOne(p => p.periodo).WithMany(p => p.pertence).HasForeignKey(p => p.fk_Periodo_Id_Periodo);
            
            modelBuilder.Entity<Lecionar>().HasKey(p => new { p.fk_Professor_Id_Professor, p.fk_Turma_Id_Turma });
            modelBuilder.Entity<Lecionar>().HasOne(p => p.turma).WithMany(p => p.lecionar).HasForeignKey(p => p.fk_Turma_Id_Turma);
            modelBuilder.Entity<Lecionar>().HasOne(p => p.professor).WithMany(p => p.lecionar).HasForeignKey(p => p.fk_Professor_Id_Professor);
            
            modelBuilder.Entity<Ofertar_Turma_Disciplina_Sala>().HasKey(p => new { p.fk_Turma_Id_Turma, p.fk_Disciplina_Id_Materia, p.fk_Sala_Id_Sala });
            modelBuilder.Entity<Ofertar_Turma_Disciplina_Sala>().HasOne(p => p.turma).WithMany(p => p.ofertar_Turma_Disciplina_Sala).HasForeignKey(p => p.fk_Turma_Id_Turma);
            modelBuilder.Entity<Ofertar_Turma_Disciplina_Sala>().HasOne(p => p.disciplina).WithMany(p => p.ofertar_Turma_Disciplina_Sala).HasForeignKey(p => p.fk_Disciplina_Id_Materia);
            modelBuilder.Entity<Ofertar_Turma_Disciplina_Sala>().HasOne(p => p.sala).WithMany(p => p.ofertar_Turma_Disciplina_Sala).HasForeignKey(p => p.fk_Sala_Id_Sala);
        }

        public DbSet<TFBancoDados.Models.Professor> Professor { get; set; }

        public DbSet<TFBancoDados.Models.Curso> Curso { get; set; }

        public DbSet<TFBancoDados.Models.Disciplina> Disciplina { get; set; }

        public DbSet<TFBancoDados.Models.Periodo> Periodo { get; set; }

        public DbSet<TFBancoDados.Models.Sala> Sala { get; set; }

        public DbSet<TFBancoDados.Models.Turma> Turma { get; set; }

        public DbSet<Possui> Possui { get; set; }
        public DbSet<Pertence> Pertence { get; set; }
        public DbSet<Lecionar> Lecionar { get; set; }
        public DbSet<Ofertar_Turma_Disciplina_Sala> Ofertar { get; set; }
    }
}
