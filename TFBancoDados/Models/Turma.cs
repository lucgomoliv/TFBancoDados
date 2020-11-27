using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TFBancoDados.Models
{
    public class Turma
    {
        [Key]
        public int Id_Turma { get; set; }
        [Required]
        public string Horario_Inicio { get; set; }
        [Required]
        public string Horario_Fim { get; set; }
        [Required]
        [Column(TypeName = "varchar(3)")]
        public string Dia_Semana { get; set; }
        public ICollection<Pertence> pertence { get; set; }
        public ICollection<Lecionar> lecionar { get; set; }
        public ICollection<Ofertar_Turma_Disciplina_Sala> ofertar_Turma_Disciplina_Sala { get; set; }
    }
}
