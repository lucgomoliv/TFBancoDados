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
    public class ProfessoresController : Controller
    {
        private readonly TFBancoDadosContext _context;

        public ProfessoresController(TFBancoDadosContext context)
        {
            _context = context;
        }

        public async Task<List<Professor>> Index()
        {
            return await _context.Professor.ToListAsync();
        }

        public async Task<ActionResult<Professor>> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var professor = await _context.Professor
                .FirstOrDefaultAsync(m => m.Id_Professor == id);
            if (professor == null)
            {
                return NotFound();
            }

            return professor;
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult<Professor>> Create([FromBody] Professor professor)
        {
            if (ModelState.IsValid)
            {
                _context.Add(professor);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return professor;
        }

        public async Task<ActionResult<Professor>> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var professor = await _context.Professor.FindAsync(id);
            if (professor == null)
            {
                return NotFound();
            }
            return professor;
        }

        [HttpPost]
        public async Task<ActionResult<Professor>> Edit([FromBody] Professor professor)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(professor);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProfessorExists(professor.Id_Professor))
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
            return professor;
        }

        public async Task<ActionResult<Professor>> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var professor = await _context.Professor
                .FirstOrDefaultAsync(m => m.Id_Professor == id);
            if (professor == null)
            {
                return NotFound();
            }

            return professor;
        }

        [HttpPost, ActionName("Delete")]
        public async Task<ActionResult<Professor>> DeleteConfirmed([FromBody] int id)
        {
            var professor = await _context.Professor.FindAsync(id);
            _context.Professor.Remove(professor);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ProfessorExists(int id)
        {
            return _context.Professor.Any(e => e.Id_Professor == id);
        }
    }
}
