using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TFBancoDados.Models
{
    public class Professor
    {
        [Key]
        public int Id_Professor { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Nome { get; set; }
    }
}
