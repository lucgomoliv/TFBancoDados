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
    public class PeriodosController : Controller
    {
        private readonly TFBancoDadosContext _context;

        public PeriodosController(TFBancoDadosContext context)
        {
            _context = context;
        }

        // GET: Periodoes
        public async Task<List<Periodo>> Index()
        {
            return await _context.Periodo.ToListAsync();
        }

        // GET: Periodoes/Details/5
        public async Task<ActionResult<Periodo>> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var periodo = await _context.Periodo
                .FirstOrDefaultAsync(m => m.Id_Periodo == id);
            if (periodo == null)
            {
                return NotFound();
            }

            return periodo;
        }

        // GET: Periodoes/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Periodoes/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<ActionResult<Periodo>> Create([FromBody] Periodo periodo)
        {
            if (ModelState.IsValid)
            {
                _context.Add(periodo);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return periodo;
        }

        // GET: Periodoes/Edit/5
        public async Task<ActionResult<Periodo>> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var periodo = await _context.Periodo.FindAsync(id);
            if (periodo == null)
            {
                return NotFound();
            }
            return periodo;
        }

        // POST: Periodoes/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<ActionResult<Periodo>> Edit([FromBody] Periodo periodo)
        {

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(periodo);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PeriodoExists(periodo.Id_Periodo))
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
            return periodo;
        }

        // GET: Periodoes/Delete/5
        public async Task<ActionResult<Periodo>> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var periodo = await _context.Periodo
                .FirstOrDefaultAsync(m => m.Id_Periodo == id);
            if (periodo == null)
            {
                return NotFound();
            }

            return periodo;
        }

        // POST: Periodoes/Delete/5
        [HttpPost, ActionName("Delete")]
        public async Task<ActionResult<Periodo>> DeleteConfirmed([FromBody] int id)
        {
            var periodo = await _context.Periodo.FindAsync(id);
            _context.Periodo.Remove(periodo);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool PeriodoExists(int id)
        {
            return _context.Periodo.Any(e => e.Id_Periodo == id);
        }
    }
}
