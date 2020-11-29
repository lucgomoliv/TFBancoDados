using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TFBancoDados.Models
{
    public class Professor
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id_Professor { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Nome { get; set; }
        public ICollection<Lecionar> lecionar { get; set; }
    }
}
