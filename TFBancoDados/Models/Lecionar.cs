using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TFBancoDados.Models
{
    public class Lecionar
    {
        public int fk_Professor_Id_Professor { get; set; }
        public int fk_Turma_Id_Turma { get; set; }
        public Turma turma { get; set; }
        public Professor professor { get; set; }
    }
}
