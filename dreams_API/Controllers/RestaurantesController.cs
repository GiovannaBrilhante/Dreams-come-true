using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using dreams_API.Data;
using dreams_API.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using dreams_API.Data;
using dreams_API.Models;


namespace dreams_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantesController : ControllerBase
    {
        private DreamsContext _context;
        public RestaurantesController(DreamsContext context)
        {
            //construtor
            _context = context;
        }

        [HttpGet]
        [Authorize(Roles = "administrador, usuario")]
        public ActionResult<List<Restaurantes>> GetAll() {
            if(_context.Restaurantes is not null)
            {
                return _context.Restaurantes.ToList();
            }
            else {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpGet("{RestaurantesId}")]
        [Authorize(Roles = "administrador,usuario")]
        public ActionResult<List<Restaurantes>> Get(int RestaurantesId)
        {
            try
            {
                var result = _context.Restaurantes.Find(RestaurantesId);
                if(result == null)
                {
                    return NotFound();
                } return Ok(result);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
        }

        [HttpPost]
        [Authorize(Roles = "administador,usuario")]
        public async Task<ActionResult> post(Restaurantes model)
        {
            try
            {
                _context.Restaurantes.Add(model);
                if(await _context.SaveChangesAsync() == 1)
                {
                    //return Ok();
                    return Created($"/api/Restaurantes/{model.name}", model);
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados");
            }
            return BadRequest();
            
        }

        [HttpPut("{RestaurantesId}")]
        [Authorize(Roles = "administador")]
        public async Task<ActionResult> put(int RestaurantesId, Restaurantes dadosRestaurantesAlt)
        {
            try
            {
                //verifica se existe aluno a ser alterado
                var result = await _context.Restaurantes.FindAsync(RestaurantesId);
                if( RestaurantesId != null)
                {
                    //método do EF
                    return BadRequest();
                }
                result.name = dadosRestaurantesAlt.name;
                result.avaliacao = dadosRestaurantesAlt.avaliacao;
                result.nameFilme = dadosRestaurantesAlt.nameFilme;
                result.url= dadosRestaurantesAlt.url;
                await _context.SaveChangesAsync();
                return Created($"/api/Filmes/{dadosRestaurantesAlt.name}", dadosRestaurantesAlt);
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no acesso ao banco de dados.");
            }
    }

        [HttpDelete("{RestaurantesId}")]
        [Authorize(Roles = "administador")]
        public async Task<ActionResult> delete(int RestaurantesId)
        {
            try
            {
                //verifica se existe aluno a ser excluido
                var Restaurantes = await _context.Filmes.FindAsync(RestaurantesId);
                if( Restaurantes == null)
                {
                    //método do EF
                    return NotFound();
                }
                _context.Remove(Restaurantes);
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