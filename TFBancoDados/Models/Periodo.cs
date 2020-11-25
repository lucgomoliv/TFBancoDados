using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TFBancoDados.Models
{
    public class Periodo
    {
        [Key]
        [Required]
        public int Id_Periodo { get; set; }
    }
}
