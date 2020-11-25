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

        public DbSet<TFBancoDados.Models.Professor> Professor { get; set; }

        public DbSet<TFBancoDados.Models.Curso> Curso { get; set; }

        public DbSet<TFBancoDados.Models.Disciplina> Disciplina { get; set; }

        public DbSet<TFBancoDados.Models.Periodo> Periodo { get; set; }

        public DbSet<TFBancoDados.Models.Sala> Sala { get; set; }

        public DbSet<TFBancoDados.Models.Turma> Turma { get; set; }
    }
}
