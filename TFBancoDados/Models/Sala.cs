using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TFBancoDados.Models
{
    public class Sala
    {
        [Key]
        [Required]
        public int Id_Sala { get; set; }
        [JsonIgnore]
        public ICollection<Ofertar_Turma_Disciplina_Sala> ofertar_Turma_Disciplina_Sala { get; set; }
    }
}
