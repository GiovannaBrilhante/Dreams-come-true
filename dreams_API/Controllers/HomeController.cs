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
    [ApiController]
    [Route("/")]
    public class HomeController: ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly DreamsContext? _context;

        public HomeController(
            IConfiguration configuration,
            DreamsContext context)
            {
                _configuration = configuration;
                _context = context;
            }
        
        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public ActionResult<dynamic> Login([FromBody] Usuario usuario)
        {
            //verifica se existe usuario a ser excluido
            var user = _context.Usuario.Where(u => u.username == usuario.username && u.senha == usuario.senha).FirstOrDefault();
            if(usuario == null)
                return Unauthorized("Usuário ou senha invalida");

            var authClaims = new List<Claim> {
                new Claim(ClaimTypes.Name, usuario.username),
                new Claim(ClaimTypes.Role, usuario.cargo),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = GetToken(authClaims);
            usuario.senha = "";

            return Ok(new{
                token = new JwtSecurityTokenHandler().WriteToken(token),
                usuario = usuario
            });
        }
        
    }
}