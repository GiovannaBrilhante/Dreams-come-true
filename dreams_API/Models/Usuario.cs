using System.ComponentModel.DataAnnotations;
namespace dreams_API.Models
{
    public class Usuario
    {
        public int id {get;set;}

        [Required(ErrorMessage="O campo username é obrigatório",AllowEmptyStrings=false)]
        [StringLength(20), MinLength(2)]
        public string? username { get; set;} = string.Empty;

        [Required(ErrorMessage="O campo senha é obrigatório",AllowEmptyStrings=false)]
        [StringLength(20), MinLength(2)]
        public string? senha { get;set;} = string.Empty;

        [Required(ErrorMessage="O campo cargo é obrigatório",AllowEmptyStrings=false)]
        [StringLength(20), MinLength(2)]
        public string? cargo {get; set;} = string.Empty;
    }
}