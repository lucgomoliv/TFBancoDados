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
        // GET: PossuiController
        public async Task<List<Lecionar>> Index()
        {
            return await _context.Lecionar.ToListAsync();
        }

        // GET: PossuiController/Details/5
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

        // GET: PossuiController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PossuiController/Create
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

        // GET: PossuiController/Edit/5
        public ActionResult Edit(int id1)
        {
            return View();
        }

        // POST: PossuiController/Edit/5
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

        // GET: PossuiController/Delete/5
        public ActionResult Delete(int? id)
        {
            return View();
        }

        // POST: PossuiController/Delete/5
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
