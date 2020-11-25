using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TFBancoDados.Models
{
    public class Curso
    {
        [Key]
        public int Id_Curso { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Nome_Curso { get; set; }
    }
}
