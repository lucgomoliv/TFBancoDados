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
    public class DisciplinasController : Controller
    {
        private readonly TFBancoDadosContext _context;

        public DisciplinasController(TFBancoDadosContext context)
        {
            _context = context;
        }

        // GET: Disciplinas
        public async Task<List<Disciplina>> Index()
        {
            return await _context.Disciplina.ToListAsync();
        }

        // GET: Disciplinas/Details/5
        public async Task<ActionResult<Disciplina>> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var disciplina = await _context.Disciplina
                .FirstOrDefaultAsync(m => m.Id_Materia == id);
            if (disciplina == null)
            {
                return NotFound();
            }

            return disciplina;
        }

        // GET: Disciplinas/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Disciplinas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<ActionResult<Disciplina>> Create([FromBody] Disciplina disciplina)
        {
            if (ModelState.IsValid)
            {
                _context.Add(disciplina);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return disciplina;
        }

        // GET: Disciplinas/Edit/5
        public async Task<ActionResult<Disciplina>> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var disciplina = await _context.Disciplina.FindAsync(id);
            if (disciplina == null)
            {
                return NotFound();
            }
            return disciplina;
        }

        // POST: Disciplinas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<ActionResult<Disciplina>> Edit([FromBody] Disciplina disciplina)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(disciplina);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DisciplinaExists(disciplina.Id_Materia))
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
            return disciplina;
        }

        // GET: Disciplinas/Delete/5
        public async Task<ActionResult<Disciplina>> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var disciplina = await _context.Disciplina
                .FirstOrDefaultAsync(m => m.Id_Materia == id);
            if (disciplina == null)
            {
                return NotFound();
            }

            return disciplina;
        }

        // POST: Disciplinas/Delete/5
        [HttpPost, ActionName("Delete")]
        public async Task<ActionResult<Disciplina>> DeleteConfirmed([FromBody] int id)
        {
            var disciplina = await _context.Disciplina.FindAsync(id);
            _context.Disciplina.Remove(disciplina);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool DisciplinaExists(int id)
        {
            return _context.Disciplina.Any(e => e.Id_Materia == id);
        }
    }
}
