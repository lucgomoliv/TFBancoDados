using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TFBancoDados.Models
{
    public class Possui
    {
        public int fk_Periodo_Id_Periodo { get; set; }
        public int fk_Curso_Id_Curso { get; set; }
        [JsonIgnore]
        public Curso curso { get; set; }
        [JsonIgnore]
        public Periodo periodo { get; set; }
    }
}
