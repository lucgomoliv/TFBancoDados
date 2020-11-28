using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace TFBancoDados.Models
{
    public class Ofertar_Turma_Disciplina_Sala
    {
        public int fk_Turma_Id_Turma { get; set; }
        public int fk_Disciplina_Id_Materia { get; set; }
        public int fk_Sala_Id_Sala { get; set; }
        [JsonIgnore]
        public Turma turma { get; set; }
        [JsonIgnore]
        public Disciplina disciplina { get; set; }
        [JsonIgnore]
        public Sala sala { get; set; }
    }
}
