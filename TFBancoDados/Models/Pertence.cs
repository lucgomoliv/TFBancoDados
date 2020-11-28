using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TFBancoDados.Models
{
    public class Pertence
    {
        public int fk_Periodo_Id_Periodo { get; set; }
        public int fk_Turma_Id_Turma { get; set; }
        [JsonIgnore]
        public Turma turma { get; set; }
        [JsonIgnore]
        public Periodo periodo { get; set; }
    }
}
