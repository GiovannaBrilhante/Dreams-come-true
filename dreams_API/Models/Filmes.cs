using System.ComponentModel.DataAnnotations;
namespace dreams_API.Models
{
    public class Filmes
    {
        [Key]
        public int idFilme {get;set;}

        [Required(ErrorMessage="O campo username é obrigatório",AllowEmptyStrings=false)]
        [StringLength(20), MinLength(2)]
        public string? name { get; set;} = string.Empty;

        [Required(ErrorMessage="O campo senha é obrigatório",AllowEmptyStrings=false)]
        [StringLength(20), MinLength(2)]
        public string? avaliacao { get;set;} = string.Empty;

        public int ano {get; set;} 

        public string? categoria {get; set;} = string.Empty;
    }
}