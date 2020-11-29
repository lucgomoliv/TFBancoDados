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
    public class LecionarController : Controller
    {
        private readonly TFBancoDadosContext _context;

        public LecionarController(TFBancoDadosContext context)
        {
            _context = context;
        }
        public async Task<List<Lecionar>> Index()
        {
            return await _context.Lecionar.ToListAsync();
        }

        public async Task<ActionResult<Lecionar>> Details(int id1, int id2)
        {
            var lecionar = await _context.Lecionar
                .FirstOrDefaultAsync(m => m.fk_Professor_Id_Professor == id1 && m.fk_Turma_Id_Turma == id2);
            if (lecionar == null)
            {
                return NotFound();
            }

            return lecionar;
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult<Lecionar>> Create([FromBody] Lecionar lecionar)
        {
            if (ModelState.IsValid)
            {
                _context.Lecionar.Add(lecionar);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return lecionar;
        }

        public ActionResult Edit(int id1)
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult<Lecionar>> Edit([FromBody] Lecionar lecionar)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(lecionar);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return NotFound();
                }
                return RedirectToAction(nameof(Index));
            }
            return lecionar;
        }

        public ActionResult Delete(int? id)
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult<Lecionar>> Delete([FromBody] int id1)
        {
            var lecionar = await _context.Lecionar.FindAsync(id1);
            _context.Lecionar.Remove(lecionar);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}
