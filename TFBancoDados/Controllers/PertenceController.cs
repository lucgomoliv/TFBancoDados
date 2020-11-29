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
    public class PertenceController : Controller
    {
        private readonly TFBancoDadosContext _context;

        public PertenceController(TFBancoDadosContext context)
        {
            _context = context;
        }
        public async Task<List<Pertence>> Index()
        {
            return await _context.Pertence.ToListAsync();
        }

        public async Task<ActionResult<Pertence>> Details(int id1, int id2)
        {
            var pertence = await _context.Pertence
                .FirstOrDefaultAsync(m => m.fk_Periodo_Id_Periodo == id1 && m.fk_Turma_Id_Turma == id2);
            if (pertence == null)
            {
                return NotFound();
            }

            return pertence;
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult<Pertence>> Create([FromBody] Pertence pertence)
        {
            if (ModelState.IsValid)
            {
                _context.Pertence.Add(pertence);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return pertence;
        }

        public ActionResult Edit(int id1)
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult<Pertence>> Edit([FromBody] Pertence pertence)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(pertence);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return NotFound();
                }
                return RedirectToAction(nameof(Index));
            }
            return pertence;
        }

        public ActionResult Delete(int? id)
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult<Pertence>> Delete(int id1, int id2)
        {
            var pertence = await _context.Pertence.FindAsync(id1, id2);
            _context.Pertence.Remove(pertence);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}
