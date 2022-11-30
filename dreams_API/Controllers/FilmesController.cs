using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using dreams_API.Data;
using dreams_API.Models;

namespace dreams_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmesController : ControllerBase
    {
        private DreamsContext _context;
        public FilmesController(DreamsContext context)
        {
            //construtor
            _context = context;
        }

        [HttpGet]
        [Authorize(Roles = "administrador,usuario")]
        public ActionResult<List<Filmes>> GetAll()
        {
            if (_context.Filmes is not null)
            {
                return _context.Filmes.ToList();
            }
            else
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("{FilmesId}")]
        [Authorize(Roles = "administrador,usuario")]
        public ActionResult<List<Filmes>> Get(int FilmesId)
        {
            try
            {
                var result = _context.Filmes.Find(FilmesId);
                if (result == null)
                {
                    return NotFound();
                }
                return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpPost]
        [Authorize(Roles = "administrador,usuario")]
        public async Task<ActionResult> post(Filmes model)
        {
            try
            {
                _context.Filmes.Add(model);
                if (await _context.SaveChangesAsync() == 1)
                {
                    //return Ok();
                    return Created($"/api/Filmes/{model.idFilme}", model);
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados");
            }
            return BadRequest();

        }

        [HttpPut("{FilmesId}")]
        [Authorize(Roles = "administrador")]
        public async Task<ActionResult> put(int FilmesId, Filmes dadosFilmesAlt)
        {
            try
            {
                //verifica se existe aluno a ser alterado
                var result = await _context.Filmes.FindAsync(FilmesId);
                if (FilmesId != result.idFilme)
                {
                    //método do EF
                    return BadRequest();
                }
                result.name = dadosFilmesAlt.name;
                result.avaliacao = dadosFilmesAlt.avaliacao;
                result.ano = dadosFilmesAlt.ano;
                result.categoria = dadosFilmesAlt.categoria;
                await _context.SaveChangesAsync();
                return Created($"/api/Filmes/{dadosFilmesAlt.idFilme}", dadosFilmesAlt);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpDelete("{FilmesId}")]
        [Authorize(Roles = "administrador")]
        public async Task<ActionResult> delete(int FilmesId)
        {
            try
            {
                //verifica se existe aluno a ser excluido
                var Filmes = await _context.Filmes.FindAsync(FilmesId);
                if (Filmes == null)
                {
                    //método do EF
                    return NotFound();
                }
                _context.Remove(Filmes);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }
    }
}