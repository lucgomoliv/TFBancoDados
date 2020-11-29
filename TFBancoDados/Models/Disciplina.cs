using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TFBancoDados.Models
{
    public class Disciplina
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id_Materia { get; set; }
        [Required]
        [Column(TypeName = "varchar(30)")]
        public string Nome_Materia { get; set; }
        public ICollection<Ofertar_Turma_Disciplina_Sala> ofertar_Turma_Disciplina_Sala { get; set; }
    }
}
