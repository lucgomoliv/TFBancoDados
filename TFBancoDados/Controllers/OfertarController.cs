using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TFBancoDados.Data;
using TFBancoDados.Models;

namespace TFBancoDados.Controllers
{
    public class OfertarController : Controller
    {
        private readonly TFBancoDadosContext _context;

        public OfertarController(TFBancoDadosContext context)
        {
            _context = context;
        }
        public async Task<List<Ofertar_Turma_Disciplina_Sala>> Index()
        {
            return await _context.Ofertar_Turma_Disciplina_Sala.ToListAsync();
        }

        public async Task<ActionResult<Ofertar_Turma_Disciplina_Sala>> Details(int id1, int id2, int id3)
        {
            var ofertar = await _context.Ofertar_Turma_Disciplina_Sala
                .FirstOrDefaultAsync(m => m.fk_Turma_Id_Turma == id1 && m.fk_Disciplina_Id_Materia == id2 && m.fk_Sala_Id_Sala == id3);
            if (ofertar == null)
            {
                return NotFound();
            }

            return ofertar;
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult<Ofertar_Turma_Disciplina_Sala>> Create([FromBody] Ofertar_Turma_Disciplina_Sala ofertar)
        {
            if (ModelState.IsValid)
            {
                _context.Ofertar_Turma_Disciplina_Sala.Add(ofertar);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return ofertar;
        }

        public ActionResult Edit(int id1)
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult<Ofertar_Turma_Disciplina_Sala>> Edit([FromBody] Ofertar_Turma_Disciplina_Sala ofertar)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(ofertar);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return NotFound();
                }
                return RedirectToAction(nameof(Index));
            }
            return ofertar;
        }

        public ActionResult Delete(int? id)
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult<Ofertar_Turma_Disciplina_Sala>> Delete([FromBody] int id1)
        {
            var ofertar = await _context.Ofertar_Turma_Disciplina_Sala.FindAsync(id1);
            _context.Ofertar_Turma_Disciplina_Sala.Remove(ofertar);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}
