using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using TFBancoDados.Data;
using TFBancoDados.Models;

namespace TFBancoDados.Controllers
{
    public class TurmasController : Controller
    {
        private readonly TFBancoDadosContext _context;

        public TurmasController(TFBancoDadosContext context)
        {
            _context = context;
        }

        public async Task<List<Turma>> Index()
        {
            return await _context.Turma.ToListAsync();
        }

        public async Task<ActionResult<Turma>> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var turma = await _context.Turma
                .FirstOrDefaultAsync(m => m.Id_Turma == id);
            if (turma == null)
            {
                return NotFound();
            }

            return turma;
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult<Turma>> Create([FromBody] Turma turma)
        {
            if (ModelState.IsValid)
            {
                _context.Add(turma);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return turma;
        }

        public async Task<ActionResult<Turma>> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var turma = await _context.Turma.FindAsync(id);
            if (turma == null)
            {
                return NotFound();
            }
            return turma;
        }

        [HttpPost]
        public async Task<ActionResult<Turma>> Edit([FromBody] Turma turma)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    await _context.Pertence.FromSqlRaw($"select * from pertence where fk_Turma_Id_Turma = {turma.Id_Turma}")
                        .ForEachAsync(v => _context.Pertence.Remove(v));
                    await _context.Lecionar.FromSqlRaw($"select * from lecionar where fk_Turma_Id_Turma = {turma.Id_Turma}")
                        .ForEachAsync(v => _context.Remove(v));
                    await _context.Ofertar_Turma_Disciplina_Sala.FromSqlRaw($"select * from ofertar_turma_disciplina_sala where fk_Turma_Id_Turma = {turma.Id_Turma}")
                        .ForEachAsync(v => _context.Remove(v));
                    _context.Add(turma.lecionar.FirstOrDefault());
                    _context.Add(turma.ofertar_Turma_Disciplina_Sala.FirstOrDefault());
                    _context.Add(turma.pertence.FirstOrDefault());
                    _context.Update(turma);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TurmaExists(turma.Id_Turma))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return turma;
        }

        public async Task<ActionResult<Turma>> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var turma = await _context.Turma
                .FirstOrDefaultAsync(m => m.Id_Turma == id);
            if (turma == null)
            {
                return NotFound();
            }

            return turma;
        }

        [HttpPost, ActionName("Delete")]
        public async Task<IActionResult> DeleteConfirmed([FromBody] int id)
        {
            var turma = await _context.Turma.FindAsync(id);
            _context.Turma.Remove(turma);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TurmaExists(int id)
        {
            return _context.Turma.Any(e => e.Id_Turma == id);
        }
    }
}
