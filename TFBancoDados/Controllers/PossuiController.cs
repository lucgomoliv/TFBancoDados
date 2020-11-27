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
    public class PossuiController : Controller
    {
        private readonly TFBancoDadosContext _context;

        public PossuiController(TFBancoDadosContext context)
        {
            _context = context;
        }
        // GET: PossuiController
        public async Task<List<Possui>> Index()
        {
            return await _context.Possui.ToListAsync();
        }

        // GET: PossuiController/Details/5
        public async Task<ActionResult<Possui>> Details(int id1, int id2)
        {
            var possui = await _context.Possui
                .FirstOrDefaultAsync(m => m.fk_Periodo_Id_Periodo == id1 && m.fk_Curso_Id_Curso == id2);
            if (possui == null)
            {
                return NotFound();
            }

            return possui;
        }

        // GET: PossuiController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PossuiController/Create
        [HttpPost]
        public async Task<ActionResult<Possui>> Create([FromBody] Possui possui)
        {
            if (ModelState.IsValid)
            {
                _context.Possui.Add(possui);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return possui;
        }

        // GET: PossuiController/Edit/5
        public ActionResult Edit(int id1)
        {
            return View();
        }

        // POST: PossuiController/Edit/5
        [HttpPost]
        public async Task<ActionResult<Possui>> Edit([FromBody] Possui possui)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(possui);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    return NotFound();
                }
                return RedirectToAction(nameof(Index));
            }
            return possui;
        }

        // GET: PossuiController/Delete/5
        public ActionResult Delete(int? id)
        {
            return View();
        }

        // POST: PossuiController/Delete/5
        [HttpPost]
        public async Task<ActionResult<Possui>> Delete([FromBody] int id1)
        {
            var possui = await _context.Possui.FindAsync(id1);
            _context.Possui.Remove(possui);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}
