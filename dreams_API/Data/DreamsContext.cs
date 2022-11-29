using Microsoft.EntityFrameworkCore;
using dreams_API.Models;

namespace dreams_API.Data
{
    public class DreamsContext: DbContext
    {
        protected readonly IConfiguration Configuration;
        public DreamsContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            //connect to sql server with connection string from app settings
            options.UseSqlServer(Configuration.GetConnectionString("StringConexaoSQLServer"));
        }
        public DbSet<Usuario>? Usuario{get; set;}

        public DbSet<Filmes>? Filmes{get; set;}
    }
}