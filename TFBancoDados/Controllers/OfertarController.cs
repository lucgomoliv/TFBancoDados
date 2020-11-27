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
        // GET: PossuiController
        public async Task<List<Ofertar_Turma_Disciplina_Sala>> Index()
        {
            return await _context.Ofertar.ToListAsync();
        }

        // GET: PossuiController/Details/5
        public async Task<ActionResult<Ofertar_Turma_Disciplina_Sala>> Details(int id1, int id2, int id3)
        {
            var ofertar = await _context.Ofertar
                .FirstOrDefaultAsync(m => m.fk_Turma_Id_Turma == id1 && m.fk_Disciplina_Id_Materia == id2 && m.fk_Sala_Id_Sala == id3);
            if (ofertar == null)
            {
                return NotFound();
            }

            return ofertar;
        }

        // GET: PossuiController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PossuiController/Create
        [HttpPost]
        public async Task<ActionResult<Ofertar_Turma_Disciplina_Sala>> Create([FromBody] Ofertar_Turma_Disciplina_Sala ofertar)
        {
            if (ModelState.IsValid)
            {
                _context.Ofertar.Add(ofertar);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return ofertar;
        }

        // GET: PossuiController/Edit/5
        public ActionResult Edit(int id1)
        {
            return View();
        }

        // POST: PossuiController/Edit/5
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

        // GET: PossuiController/Delete/5
        public ActionResult Delete(int? id)
        {
            return View();
        }

        // POST: PossuiController/Delete/5
        [HttpPost]
        public async Task<ActionResult<Ofertar_Turma_Disciplina_Sala>> Delete([FromBody] int id1)
        {
            var ofertar = await _context.Ofertar.FindAsync(id1);
            _context.Ofertar.Remove(ofertar);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
    }
}
